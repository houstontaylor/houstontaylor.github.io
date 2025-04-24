export default function AboutPage () {
    return (
      <main className="min-h-screen flex flex-col justify-center items-center px-4">
        <div className="max-w-xl text-center space-y-4">
          <h1 className="text-3xl md:text-5xl font-semibold">About Me</h1>
          <p className="text-lg leading-relaxed">
            I’m a designer and developer focused on creating clean, intuitive experiences.
            I care about the little things — the way type breathes, how motion feels, and
            how people interact with digital spaces.
          </p>
          <p className="text-sm text-muted-foreground">
            Currently finishing my Master's at Stanford in HCI.
          </p>
        </div>
      </main>
    );
  }
  