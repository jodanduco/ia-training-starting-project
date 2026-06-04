export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="max-w-2xl px-6">
        <h1 className="text-4xl font-semibold">Advantages of Claude Code</h1>
        <ul className="mt-6 list-disc space-y-2 pl-6 text-lg">
          <li>Runs directly in your terminal, fitting naturally into existing developer workflows.</li>
          <li>Understands your entire codebase with project-aware context and CLAUDE.md instructions.</li>
          <li>Edits files, runs commands, and executes multi-step tasks autonomously.</li>
          <li>Integrates with git for committing changes, creating branches, and opening pull requests.</li>
          <li>Extensible through hooks, slash commands, subagents, and MCP servers.</li>
          <li>Available across CLI, desktop, web, and IDE extensions for VS Code and JetBrains.</li>
          <li>Powered by Claude&rsquo;s latest models for high-quality reasoning and code generation.</li>
        </ul>
      </main>
    </div>
  );
}
