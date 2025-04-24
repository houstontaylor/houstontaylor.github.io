export default function ContactPage () {
    return (
      <main className="min-h-screen flex flex-col justify-center items-center px-4">
        <div className="max-w-xl text-center space-y-6">
          <h1 className="text-3xl md:text-5xl font-semibold">Get in Touch</h1>
          <p className="text-lg">Feel free to reach out —</p>
          <a href="mailto:hctaylor@stanford.edu" className="text-accent underline text-xl">
            hctaylor@stanford.edu
          </a>
          <div className="flex space-x-4 justify-center">
            <a href="https://linkedin.com/in/yourprofile" target="_blank" className="underline text-muted-foreground">LinkedIn</a>
            <a href="https://github.com/houstontaylor" target="_blank" className="underline text-muted-foreground">GitHub</a>
          </div>
        </div>
      </main>
    );
  }
  