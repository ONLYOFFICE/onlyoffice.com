import { useEffect, useState, useCallback } from "react";
import { useTranslation } from "next-i18next";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledCommentsPanel = styled.div<{
  $addMode: boolean;
  $replyMode: boolean;
}>`
  h3 {
    padding: 56px 0 16px;
    text-align: center;
    color: #333333;
  }

  h4 {
    text-align: center;
    padding-bottom: 32px;
    font-weight: 400;
    color: #333333;
    font-size: 16px;
  }

  .list-buttons {
    display: flex;
    gap: 16px;
    justify-content: center;
    padding: 32px 0 0;
    flex-wrap: wrap;
  }

  .docbuilder-script {
    padding: 24px;
    background: rgba(239, 239, 239, 0.6);
    font-size: 14px;

    .reply {
      position: relative;
      padding-left: 40px;
      display: flex;
      align-items: center;
      gap: 12px;
      margin-top: 24px;

      &:before {
        display: block;
        content: "";
        background-image: url("/images/templates/automation-api/demo/reply.svg");
        width: 24px;
        height: 24px;
        position: relative;
      }
    }
  }

  .comment-author {
    color: #666666;
    display: inline-block;
  }

  .comment-date {
    display: inline-block;
    margin-left: 16px;
  }

  .add-comment-area {
    width: 100%;
    height: 100px;
    padding: 16px;
    font-size: 14px;
  }

  .add-reply-area {
    margin-top: 16px;
    width: 100%;
    height: 80px;
    padding: 12px;
    font-size: 14px;
  }

  .doc-builder-list-buttons button {
    padding: 21px 26px !important;
    background: transparent;
    border: 1px solid #aaaaaa !important;
    color: #444444 !important;
    font-size: 13px;
    text-transform: uppercase;
    font-weight: 600;
    line-height: 12px;
    letter-spacing: 0.04em;
    border-radius: 9px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background: transparent;
      border-color: #ff6f3d !important;
      color: #ff6f3d !important;
    }

    ${({ $addMode }) =>
      $addMode &&
      `
    pointer-events: none;
    opacity: 0.4;
  `}
  }

  .doc-builder-list-buttons li:nth-child(3) button {
    pointer-events: auto !important;
    opacity: 1 !important;
    background: ${({ $addMode }) =>
      $addMode ? "#FF6F3D" : "transparent"} !important;
    border-color: ${({ $addMode }) =>
      $addMode ? "#FF6F3D" : "#AAAAAA"} !important;
    color: ${({ $addMode }) => ($addMode ? "#fff" : "#444444")} !important;

    &:hover {
      background: transparent;
      border-color: #ff6f3d !important;
      color: ${({ $addMode }) => ($addMode ? "#fff" : "#FF6F3D")} !important;
    }
  }

  .doc-builder-list-buttons li:nth-child(1) button {
    background: ${({ $replyMode }) =>
      $replyMode ? "#FF6F3D" : "transparent"} !important;
    border-color: ${({ $replyMode }) =>
      $replyMode ? "#FF6F3D" : "#AAAAAA"} !important;
    color: ${({ $replyMode }) => ($replyMode ? "#fff" : "#444444")} !important;

    &:hover {
      background: transparent;
      border-color: #ff6f3d !important;
      color: ${({ $replyMode }) =>
        $replyMode ? "#fff" : "#FF6F3D"} !important;
    }
  }

  @media ${device.tabletS} {
    .doc-builder-list-buttons button {
      white-space: nowrap;
    }

    h3 {
      padding: 48px 0 16px;
      text-align: center;
      color: #333333;
    }
  }
`;

interface ICommentData {
  Text: string;
  Time: string;
  UserName: string;
  Replies: {
    Text: string;
    Time: string;
    UserName: string;
  }[];
}

interface IComment {
  Id: string;
  Data: ICommentData;
}

interface IConnectorEvents {
  onAddComment: IComment;
  onRemoveComment: IComment;
  onChangeCommentData: IComment;
}

interface IConnectorMethods {
  GetAllComments: {
    args: null;
    callback: (data: IComment[]) => void;
  };
  AddComment: {
    args: [{ Text: string; UserName: string; Time: string }];
    callback?: void;
  };
  RemoveComments: {
    args: [string[]];
    callback?: void;
  };
  ChangeComment: {
    args: [string, ICommentData];
    callback?: void;
  };
  MoveToComment: {
    args: [string];
    callback?: void;
  };
}

interface ICommentsPanel {
  connector: {
    executeMethod<K extends keyof IConnectorMethods>(
      method: K,
      args: IConnectorMethods[K]["args"],
      callback?: IConnectorMethods[K]["callback"],
    ): void;
    attachEvent<K extends keyof IConnectorEvents>(
      event: K,
      handler: (val: IConnectorEvents[K]) => void,
    ): void;
    detachEvent<K extends keyof IConnectorEvents>(
      event: K,
      handler: (val: IConnectorEvents[K]) => void,
    ): void;
  };
}

export const CommentsPanel = ({ connector }: ICommentsPanel) => {
  const [comments, setComments] = useState<IComment[]>([]);
  const [indexComment, setIndexComment] = useState(0);
  const [reply, setReply] = useState("");
  const [comment, setComment] = useState("");
  const [replyMode, setReplyMode] = useState(false);
  const [addMode, setAddMode] = useState(false);

  const { t } = useTranslation("automation-api");
  const current = comments[indexComment];

  const renderComment = useCallback(
    (commentList: IComment[], currentIndex: number) => {
      setComments(commentList);
      setIndexComment(currentIndex);
      if (commentList.length > 0 && connector?.executeMethod) {
        connector.executeMethod("MoveToComment", [
          commentList[currentIndex].Id,
        ]);
      }
    },
    [connector],
  );

  useEffect(() => {
    if (!connector) return;
    let isMounted = true;
    const localConnector = connector;

    const onAdd = (val: IComment) => {
      if (!isMounted || !val) return;
      setComments((prev) => {
        if (!prev.find((c) => c.Id === val.Id)) {
          return [val, ...prev];
        }
        return prev;
      });
      setIndexComment(0);
    };

    const onRemove = (val: IComment) => {
      if (!isMounted || !val) return;
      setComments((prev) => {
        const updated = prev.filter((c) => c.Id !== val.Id);
        const newIndex = Math.max(0, indexComment - 1);
        renderComment(updated, newIndex);
        return updated;
      });
    };

    const onChange = (val: IComment) => {
      if (!isMounted || !val) return;
      setComments((prev) => {
        const updated = prev.map((c) =>
          c.Id === val.Id ? { ...c, Data: val.Data } : c,
        );
        renderComment(
          updated,
          updated.findIndex((c) => c.Id === val.Id),
        );
        return updated;
      });
    };

    localConnector.executeMethod("GetAllComments", null, (data: IComment[]) => {
      if (!isMounted || !Array.isArray(data)) return;
      const currentId = comments[indexComment]?.Id;
      const newIndex = data.findIndex((c) => c.Id === currentId);
      renderComment(data, newIndex >= 0 ? newIndex : 0);
    });

    localConnector.attachEvent("onAddComment", onAdd);
    localConnector.attachEvent("onRemoveComment", onRemove);
    localConnector.attachEvent("onChangeCommentData", onChange);

    return () => {
      isMounted = false;
      try {
        if (localConnector?.detachEvent) {
          localConnector.detachEvent("onAddComment", onAdd);
          localConnector.detachEvent("onRemoveComment", onRemove);
          localConnector.detachEvent("onChangeCommentData", onChange);
        }
      } catch (err) {
        console.warn("Could not detach events", err);
      }
    };
  }, [comments, connector, indexComment, renderComment]);

  const handleAddReply = () => {
    if (!reply.trim() || !connector || !current) return;
    const datetime = `${Date.now()}`;
    const updatedComments = [...comments];
    updatedComments[indexComment].Data.Replies.push({
      Text: reply,
      Time: datetime,
      UserName: "John Smith",
    });

    connector.executeMethod("ChangeComment", [
      current.Id,
      updatedComments[indexComment].Data,
    ]);
    setReply("");
    setReplyMode(false);
  };

  const handleToggleReplyMode = () => {
    if (replyMode) {
      if (reply.trim()) {
        handleAddReply();
      } else {
        setReplyMode(false);
      }
    } else {
      setReplyMode(true);
    }
  };

  const handleAddComment = () => {
    if (!comment.trim() || !connector) return;
    const datetime = `${Date.now()}`;
    connector.executeMethod("AddComment", [
      { Text: comment, UserName: "John Smith", Time: datetime },
    ]);
    setComment("");
    setAddMode(false);
  };

  const handleToggleAddComment = () => {
    if (addMode) {
      if (comment.trim()) {
        handleAddComment();
      } else {
        setAddMode(false);
      }
    } else {
      setAddMode(true);
    }
  };

  const handleDelete = () => {
    if (!current || !connector) return;
    connector.executeMethod("RemoveComments", [[current.Id]]);
  };

  const handlePrev = () => {
    if (indexComment > 0) {
      const newIndex = indexComment - 1;
      setIndexComment(newIndex);
      connector.executeMethod("MoveToComment", [comments[newIndex].Id]);
    }
  };

  const handleNext = () => {
    if (indexComment < comments.length - 1) {
      const newIndex = indexComment + 1;
      setIndexComment(newIndex);
      connector.executeMethod("MoveToComment", [comments[newIndex].Id]);
    }
  };

  return (
    <StyledCommentsPanel $addMode={addMode} $replyMode={replyMode} >
      <div className="examples_block ec-working-with-comments">
        <Heading level={3} size={4} label={t("WorkingWithComments")} />
        <Heading level={4} size={5} label={t("CollectsAllTheCommentsFrom")} />

        {!addMode ? (
          current ? (
            <div
              id="commentsBlock"
              className="docbuilder-script"
              spellCheck={false}
            >
              <div id="comment" className="comment">
                <div className="comment-author">
                  Author: {current.Data.UserName}
                </div>
                <div className="comment-date">
                  Date: {new Date(+current.Data.Time).toLocaleString()}
                </div>
                <div className="comment-message">
                  <i>Message: {current.Data.Text}</i>
                </div>
              </div>

              <div id="replies">
                {current.Data.Replies.map((r, i) => (
                  <div key={i} className="comment reply">
                    <div>
                      <div className="comment-author">Author: {r.UserName}</div>
                      <div className="comment-date">
                        Date: {new Date(+r.Time).toLocaleString()}
                      </div>
                      <i>
                        <div className="comment-message">Message: {r.Text}</div>
                      </i>
                    </div>
                  </div>
                ))}
              </div>

              {replyMode && (
                <textarea
                  className="add-reply-area"
                  placeholder={t("EnterYourReplyHere")}
                  value={reply}
                  onChange={(e) => setReply(e.target.value)}
                />
              )}
            </div>
          ) : (
            <div id="empty-comment">
              <Text>{t("ThereAreNoComments")}</Text>
            </div>
          )
        ) : (
          <textarea
            className="add-comment-area"
            placeholder={t("EnterYourCommentHere")}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        )}

        <ul className="list-buttons doc-builder-list-buttons">
          <li>
            <button onClick={handleToggleReplyMode}>
              {replyMode ? t("SendReply") : t("AddReply")}
            </button>
          </li>
          <li>
            <button onClick={handleDelete}>{t("Delete")}</button>
          </li>
          <li>
            <button onClick={handleToggleAddComment}>
              {addMode ? t("SendComment") : t("AddComment")}
            </button>
          </li>
          <li>
            <button onClick={handlePrev}>{"<"}</button>
          </li>
          <li>
            <button onClick={handleNext}>{">"}</button>
          </li>
        </ul>
      </div>
    </StyledCommentsPanel>
  );
};
