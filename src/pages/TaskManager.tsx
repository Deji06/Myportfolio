import mobileView from "../assets/taskmanagermobile.png";
import DesktopView from "../assets/taskmanager_desktop.png";
import DesktopViewLogin from "../assets/taskmanager_loginDesktop.png";

const ChatApp = () => {
  return (
    <>
      <div
        className="pb-10 mt-10 md:mt-0 bg-white animate-slide-in"
        style={{ animationDelay: "1s" }}
      >
        <p className="m-auto w-fit pt-10 text-[35px] text-[#686868] font-bold ">
          project details
        </p>
        <img
          src={DesktopView}
          alt="chat app image"
          loading="lazy"
          className="w-[80%] md:h-[450px] m-auto mt-5"
        />

        <div className="px-5 m-auto mt-10">
          <div className="md:w-[80%] m-auto space-y-5">
            <p className="font-bold text-[30px] text-[#686868]">
              Beyond a Regular Todo App: Building a Full-Stack Task Manager
            </p>
            <p className="text-black">
              Task management tools are common, but I wanted to build something
              that feels professional and production-ready. This project goes
              beyond simple CRUD by integrating{" "}
              <b>secure authentication with cookies</b>, hybrid rendering with
              Next.js (<b>SSR + CSR</b>), and{" "}
              <b>global state management with Context</b> to keep data
              consistent across the application.
            </p>
            <div className="space-y-3">
              <p className="text-black text-[20px]">Tech Stack at a Glance</p>
              <ul className="list-disc list-inside space-y-2">
                <li className="text-black">
                  Frontend: Next.js + TypeScript (server-side + client-side
                  rendering)
                </li>
                <li className="text-black">
                  State Management: React Context (global variables and API
                  data)
                </li>
                <li className="text-black">
                  Authentication: Cookies (secure token + username storage)
                </li>
                <li className="text-black">
                  Backend: Node.js + Express (structured API layer for tasks &
                  auth)
                </li>
                <li className="text-black">
                    Database: MongoDB

                </li>
                <li className="text-black">
                  Containerization: Docker (deployment-ready setup)
                </li>
              </ul>
              <p className="text-black">
                This stack gave me both <b>performance</b> and <b>security</b>,
                while keeping the app scalable and maintainable.
              </p>
            </div>
          </div>

          <div className="flex md:flex-row flex-col gap-x-3 gap-y-5 pt-10 md:mx-14">
            <img
              src={DesktopViewLogin}
              alt="task manager login view"
              className="md:w-[80%] max-h-[450px] m-auto mt-5 object-contain rounded-md"
              loading="lazy"
            />
            <img
              src={mobileView}
              alt="task manager mobile view"
              className="w-[80%] md:max-h-[360px] m-auto mt-5 object-contain rounded-[10px]"
              loading="lazy"
            />
          </div>

          <div className="space-y-3 md:w-[80%] m-auto">
            <p className="font-bold text-[30px] text-[#686868] pt-10">
              Key Features That Stand Out
            </p>
            <ul className="list-disc list-inside space-y-2 text-black">
              <li>
                ✅ Hybrid rendering — <b>SSR</b> for API handling and <b>CSR</b>{" "}
                for smooth component rendering
              </li>
              <li>
                ✅ Secure authentication — tokens and usernames stored in{" "}
                <b>cookies</b>, not localStorage
              </li>
              <li>
                ✅ Global state with <b>Context</b> to keep tasks,
                authentication, and UI state in sync
              </li>
              <li>
                ✅ Task filtering & ordering (All, Completed, Incomplete) for
                productivity
              </li>
              <li>✅ Dockerized for reliable cross-platform deployment</li>
            </ul>

            <p className="font-bold text-[30px] text-[#686868]">
              My Design Philosophy
            </p>
            <p className="text-black">
              I wanted this project to feel like something you could actually
              deploy for teams. My guiding principles were:
            </p>
            <ul className="list-disc list-inside space-y-2 text-black">
              <li>
                Build securely: Use cookies instead of localStorage for auth.
              </li>
              <li>
                Keep it dynamic: SSR for faster loads, CSR for rich
                interactivity.
              </li>
              <li>
                Think like a product: Filtering, auth, and global state make it
                far more than a “basic todo app.”
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatApp;
