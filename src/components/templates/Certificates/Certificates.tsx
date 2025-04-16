import { Certificate } from "./sections/Certificate";
import { Hero } from "./sections/Hero";
import { UsersWorldwide } from "./sections/UsersWorldwide";

const CertificatesTemplate = () => {
  return (
    <>
      <Hero />
      <Certificate />
      <UsersWorldwide />
    </>
  );
};

export { CertificatesTemplate };
