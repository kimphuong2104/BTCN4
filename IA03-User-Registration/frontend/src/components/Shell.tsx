function Shell({ children }: React.PropsWithChildren) {
  return (
    <div className="min-h-dvh bg-[radial-gradient(1200px_600px_at_50%_-10%,#e5e7eb_10%,transparent),linear-gradient(180deg,#fafafa,white)]">
      <div className="mx-auto flex min-h-dvh max-w-6xl items-center justify-center p-6">{children}</div>
    </div>
  );
}
export default Shell;
