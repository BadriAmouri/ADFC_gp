import { BsCurrencyDollar } from "react-icons/bs";
import { FaHandshake, FaShare } from "react-icons/fa";
import {
  FiHome,
  FiLayers,
  FiMail,
  FiMessageCircle,
  FiSettings,
  FiShoppingBag,
  FiShoppingCart,
  FiUsers,
} from "react-icons/fi";
import { useWorker } from "../Worker/WorkerContext";

export const getLinks = (isWorkerWorkspace) => [
  {
    name: isWorkerWorkspace ? "Worker Profile" : "Dashboard",
    icon: <FiHome />,
    url: isWorkerWorkspace ? "/worker/Profile" : "/dashboard",
  },
  {
    name: !isWorkerWorkspace ? "Generate Project" : "My Projects",
    icon: <FiUsers />,
    url: !isWorkerWorkspace ?"/customers" : "/worker/ProjectDetails",
  },
 
  {
    name: isWorkerWorkspace ? "Inbox" : "Project Generated",
    icon:  isWorkerWorkspace ?   <FiMail /> : <FiSettings />,
    url: isWorkerWorkspace ? "/worker/inbox": "/settings",
  },
  {
    name:  isWorkerWorkspace ?  "" : "Projects",
    icon: isWorkerWorkspace ? "" : <FiMail />,
    url: isWorkerWorkspace ? "" : "/inbox",
  },
];
