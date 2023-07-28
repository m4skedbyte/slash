import { globalService } from "../services";
import Icon from "./Icon";

const DemoBanner: React.FC = () => {
  const {
    workspaceProfile: {
      profile: { mode },
    },
  } = globalService.getState();
  const shouldShow = mode === "demo";

  if (!shouldShow) return null;

  return (
    <div className="z-10 relative flex flex-row items-center justify-center w-full py-2 text-sm sm:text-lg font-medium dark:text-gray-300 bg-white dark:bg-zinc-700 shadow">
      <div className="w-full max-w-4xl px-4 flex flex-row justify-between items-center gap-x-3">
        <span>✨Slash - An open source, self-hosted bookmarks and link sharing platform</span>
        <a
          className="shadow flex flex-row justify-center items-center px-2 py-1 rounded-md text-sm sm:text-base text-white bg-blue-600 hover:bg-blue-700"
          href="https://github.com/boojack/slash#deploy-with-docker-in-seconds"
          target="_blank"
        >
          Install
          <Icon.ExternalLink className="w-4 h-auto ml-1" />
        </a>
      </div>
    </div>
  );
};

export default DemoBanner;