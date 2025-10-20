import DesktopView from '../assets/job-tracker.png'
import mobileView from '../assets/jobtrackerMobile.png'

const JobTracker = () => {
  return (
    <>
      <div
        className="pb-10 mt-10 md:mt-0 bg-white animate-slide-in"
        style={{ animationDelay: "1s" }}
      >
        <p className="m-auto w-fit pt-10 text-[35px] text-[#686868] font-bold">
          Project Details
        </p>

        <img
          src={DesktopView}
          alt="Job Tracker desktop view"
          loading="lazy"
          className="w-[80%] md:h-[450px] m-auto mt-5"
        />

        <div className="px-5 m-auto mt-10 space-y-5">
          <div className="md:w-[80%] m-auto space-y-5">
            <p className="font-bold text-[30px] text-[#686868]">
              Building a Streamlined Job Tracker: My Approach to Productivity and Data Management
            </p>
            <p className="text-black">
              Searching for jobs can be overwhelming — tracking applications,
              statuses, and deadlines easily gets messy. The <strong>Job Tracker</strong>
              app was designed to solve that problem by providing a simple,
              structured, and visually clean way to manage job applications.
              This project showcases my skills in full-stack development,
              database design, and creating a smooth, responsive UI that empowers
              users to stay organized during their job search.
            </p>

            <div className="space-y-3">
              <p className="text-black text-[20px]">Tech Stack at a Glance</p>
              <ul className="list-disc list-inside space-y-2">
                <li className="text-black">
                  <strong>Frontend:</strong> Next.js + TypeScript + ShadCN UI + TanStack Table
                  (dynamic UI with advanced table handling)
                </li>
                <li className="text-black">
                  <strong>Backend:</strong> Express.js + Prisma (structured API and ORM integration)
                </li>
                <li className="text-black">
                  <strong>Database:</strong> PostgreSQL (hosted on Supabase)
                </li>
                <li className="text-black">
                  <strong>Deployment:</strong> Vercel (frontend) and Render (backend)
                </li>
              </ul>
              <p className="text-black">
                Together, these technologies form a full-stack solution that’s
                fast, reliable, and easily scalable — perfect for tracking
                hundreds of job applications efficiently.
              </p>
            </div>
          </div>

          <div className="flex md:flex-row flex-col gap-x-3 gap-y-5 pt-10 md:mx-14">
            <img
              src={DesktopView}
              alt="Job Tracker desktop view"
              className="md:w-[80%] max-h-[450px] m-auto mt-5 object-contain rounded-md"
              loading="lazy"
            />
            <img
              src={mobileView}
              alt="Job Tracker mobile view"
              className="w-[80%] md:max-h-[360px] m-auto mt-5 object-contain rounded-[10px]"
              loading="lazy"
            />
          </div>

          <div className="space-y-3 md:w-[80%] m-auto">
            <p className="font-bold text-[30px] text-[#686868] pt-10">
              Focused on Efficiency and Usability
            </p>
            <p className="text-black">
              Every feature in the Job Tracker was built around the goal of
              helping users save time and stay organized. The dashboard lets
              users view, filter, and paginate through applications with ease.
              Real-time validation, clear feedback messages, and structured UI
              elements make interaction intuitive and reliable.
            </p>

            <div className="space-y-3">
              <p className="font-bold text-[30px] text-[#686868]">
                My Design Philosophy
              </p>
              <p className="text-black">
                Building a productivity tool like this reinforced my belief that
                great software isn’t just functional — it should feel natural
                and empowering. My guiding principles were:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li className="text-black">
                  <strong>Clarity first:</strong> Keep the UI clean and reduce visual clutter.
                </li>
                <li className="text-black">
                  <strong>Intuitive flow:</strong> Ensure every user action has clear feedback.
                </li>
                <li className="text-black">
                  <strong>Scalability in mind:</strong> Design APIs and data models
                  that can grow as features expand.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobTracker;
