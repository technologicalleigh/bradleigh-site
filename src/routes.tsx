import { useState } from "react";
import { createBrowserRouter } from "react-router-dom";
import Introduction from "./components/Introduction";
import Navbar from "./components/NavBar";
import LearningAdventures from "./components/LearningAdventures";
import DevOpsAdventure from "./components/DevOpsAdventure";
import BottomBorder from "./components/BottomBorder";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Introduction />
        <BottomBorder />
      </>
    ),
  },
  {
    path: "/adventures",
    element: (
      <>
        <Navbar />
        <LearningAdventures />
      </>
    ),
  },
  {
    path: "/devopsadventure",
    element: (
      <>
        <Navbar />
        <DevOpsAdventure />
      </>
    ),
  },
]);

export default router;
