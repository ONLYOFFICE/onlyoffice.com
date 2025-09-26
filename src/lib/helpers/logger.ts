export function logError(context: string, message: string, error?: unknown) {
  if (error instanceof Error) {
    console.error(
      `[${new Date().toISOString()}] [ERROR] [${context}] [${message}]`,
      {
        name: error.name,
        message: error.message,
        stack: error.stack,
      },
    );
  } else {
    console.error(
      `[${new Date().toISOString()}] [ERROR] [${context}] ${message}`,
      error,
    );
  }
}
