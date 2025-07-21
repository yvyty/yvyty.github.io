import { type FC } from "react";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";

const App: FC = () => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800">

      <header className="flex flex-col justify-center items-center w-full h-screen text-center bg-gradient-to-br from-gray-100 to-gray-200">
        <h1 className="text-6xl font-extrabold tracking-tight w-full">YVYTY</h1>
        <p className="mt-4 text-2xl w-full px-4 sm:px-0">
          Crafting the open-source tools that form the bedrock of your next project.
        </p>
        <div className="mt-6 w-full flex justify-center">
          <a
            href="https://github.com/yvyty"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-gray-800 text-white hover:bg-gray-700 px-8 py-4 text-lg rounded-lg">
              Visit Our GitHub
            </Button>
          </a>
        </div>
      </header>

      <section className="w-full px-0 py-10 bg-white">
        <h2 className="text-4xl font-bold text-center mb-10 w-full">
          Our Projects
        </h2>
        <div className="flex justify-center w-full">
          <Card className="w-full max-w-3xl mx-auto">
            <CardContent className="p-6 text-center">
              <h3 className="font-semibold text-2xl">Projects Coming Soon</h3>
              <p className="mt-3 text-gray-600">
                Stay tuned for open-source tools and frameworks designed by the YVYTY team.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="w-full text-center text-gray-500 py-6">
        <p>&copy; 2025 YVYTY. Built with ❤️ by developers for developers.</p>
      </footer>
    </div>
  );
};

export default App;
