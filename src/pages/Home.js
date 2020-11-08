import React from "react";
import MainBanner from "../components/Web/MainBanner";
import HomeCourses from "../components/Web/HomeCourses";
import HowMyCoursesWork from "../components/Web/HowMyCoursesWork";
import ReviewCourses from "../components/Web/ReviewCourses";
export default function Home() {
  return (
    <div>
      <MainBanner/>
      
      <HomeCourses />
      
      <HowMyCoursesWork />
      <ReviewCourses/>
    </div>
  );
}
