import { type FC } from "react";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";

const App: FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800">
      {/* Hero */}
      <header className="text-center py-20">
        <h1 className="text-5xl font-extrabold tracking-tight">YVYTY</h1>
        <p className="mt-4 text-xl max-w-2xl mx-auto">
          Crafting the open-source tools that form the bedrock of your next project.
        </p>
        <div className="mt-6">
          <a
            href="https://github.com/yvyty"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="text-lg px-6 py-3">Visit Our GitHub</Button>
          </a>
        </div>
      </header>

      {/* Our Tools */}
      <section className="px-4 md:px-20 py-10 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">Our Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Example Tool 1 */}
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-xl">CLI Starter</h3>
              <p className="mt-2 text-gray-600">
                A lightweight CLI scaffold for fast development.
              </p>
            </CardContent>
          </Card>
          {/* Example Tool 2 */}
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-xl">Framework X</h3>
              <p className="mt-2 text-gray-600">
                An intuitive micro-framework for rapid API development.
              </p>
            </CardContent>
          </Card>
          {/* Example Tool 3 */}
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-xl">Prompt Tools</h3>
              <p className="mt-2 text-gray-600">
                Utilities to streamline AI prompt engineering workflows.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto text-center text-gray-500 py-6">
        <p>&copy; 2025 YVYTY. Built with ❤️ by developers for developers.</p>
      </footer>
    </div>
  );
};

export default App;
