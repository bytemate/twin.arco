import { Switch, Route } from '@modern-js/runtime/router';
import '@arco-design/web-react/es/style/index.css';
import 'windi.css';

const App = () => (
  <Switch>
    <Route exact={true} path="/">
      <div className="flex flex-col items-center justify-center max-w-full min-h-screen">
        <main className="flex-1 flex p-20 flex-col justify-center items-center">
          <div className="mb-8">
            <img
              src="https://lf3-static.bytednsdoc.com/obj/eden-cn/ylaelkeh7nuhfnuhf/modernjs-cover.png"
              width="300"
              alt="Modern.js Logo"
            />
          </div>
          <p className="text-center text-2xl">
            Get started by editing{' '}
            <code className="rounded-[5px] font-mono p-3 text-xl bg-gray-100">
              src/App.tsx
            </code>
          </p>
          <div className="inline-grid w-[800px] mt-12 grid-cols-2 gap-x-4 gap-y-6 items-center justify-center">
            <a
              href="https://modernjs.dev/docs/start"
              className="w-[45%] h-[100px] border border-red-10 text-red-10 transform ease-in-out flex items-center justify-center hover:scale-105 focus:scale-105 mx-auto">
              <h2 className="text-2xl">Quick Start</h2>
            </a>
            <a
              href="https://modernjs.dev/docs/guides"
              className="w-[45%] h-[100px] border border-red-10 text-red-10 transform ease-in-out flex items-center justify-center hover:scale-105 focus:scale-105 mx-auto">
              <h2 className="text-2xl">Handbook</h2>
            </a>
            <a
              href="https://modernjs.dev/docs/apis"
              className="w-[45%] h-[100px] border border-red-10 text-red-10 transform ease-in-out flex items-center justify-center hover:scale-105 focus:scale-105 mx-auto">
              <h2 className="text-2xl">API Reference </h2>
            </a>
            <a
              href="https://modernjs.dev/coming-soon"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[45%] h-[100px] border border-red-10 text-red-10 transform duration-[0.1s] ease-in-out flex items-center justify-center hover:scale-105 focus:scale-105 mx-auto">
              <h2 className="text-2xl">Community </h2>
            </a>
          </div>
        </main>
        <footer className="w-full h-20 border-t border-t-gray-300 flex justify-center items-center bg-red-10">
          <a
            href="https://modernjs.dev"
            className="flex justify-center items-center flex-grow text-warm-gray-50 text-xl"
            target="_blank"
            rel="noopener noreferrer">
            Powered by Modern.js
          </a>
        </footer>
      </div>
    </Route>
    <Route path="*">
      <div>404</div>
    </Route>
  </Switch>
);

export default App;
