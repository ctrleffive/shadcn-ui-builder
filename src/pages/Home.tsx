export const HomePage = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center space-y-4 text-center">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">🎉</h1>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Something exciting is coming soon!
      </h3>
      <p className="text-sm text-muted-foreground">Please wait...</p>
    </div>
  );
};
