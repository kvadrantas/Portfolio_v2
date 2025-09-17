// ************ IMPORT JS MOUDLES ************

// HERO - HEADER
import { backgroundDelay } from "./components/hero/background-delay.js";
import { sticky } from "./components/hero/sticky.js";
import { autotypeTextData } from "./data/hero/autotypeTextData.js";
import { AutotypeText } from "./components/hero/autotypeText.js";
import { socialData } from "./data/hero/socialData.js";
import { Social } from "./components/hero/Social.js";

// TESTIMONIAL
// import { testimonialData } from "./data/testimonial/testimonialData.js";
// import { Testimonial } from "./components/testimonial/Testimonial.js";

// BUTTON ANIMATION
import { allButtonAnimation } from "./components/button/button.js";


// PORTFOLIO GALLERY
import { GalleryHover } from "./components/portfolio-gallery/GalleryHover.js";
import { GalleryNavigation } from "./components/portfolio-gallery/GalleryNavigation.js";
import { portfolioAllData } from "./data/portfolio-gallery/portfolioAllData.js";
import { portfolioBrandData } from "./data/portfolio-gallery/portfolioBrandData.js";
import { portfolioDesignData } from "./data/portfolio-gallery/portfolioDesignData.js";
import { portfolioPhotoData } from "./data/portfolio-gallery/portfolioPhotoData.js";
import { portfolioVideoData } from "./data/portfolio-gallery/portfolioVideoData.js";
import { portfolioReactData } from "./data/portfolio-gallery/portfolioReactData.js";
import { portfolioVueData } from "./data/portfolio-gallery/portfolioVueData.js";

// BLOG
import { Blog } from "./components/blog/Blog.js";
import { blogData } from "./data/blog/blogData.js";

// RESUME 
import { resume } from "./components/resume/resume.js";
import { resumeData } from "./data/resume/resumeData.js";

// SLIDE-BAR
import { slidebar } from "./components/slide-bar/slidebar.js";
import { slidebarData } from "./data/slide-bar/slidebarData.js";



// ************ EXECUTE MODULES ************

// HERO - HEADER
backgroundDelay();
sticky();
new AutotypeText(autotypeTextData);
new Social('.socials', socialData);
// new Testimonial(testimonialData);

// BLOG
new Blog(blogData);

// PORTFOLIO GALLERY
new GalleryHover();
new GalleryNavigation(portfolioAllData, portfolioBrandData, portfolioDesignData, portfolioPhotoData, portfolioVideoData, portfolioReactData, portfolioVueData, './img/portfolio/');

// BUTTON
allButtonAnimation();

// RESUME 
resume();

// SLIDE-BAR
slidebar();

document.getElementById('age').textContent = calculateAge();

function calculateAge() {
  const birthYear = 1982;
  const birthMonth = 1;
  const birthDay = 16;

  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1; // getMonth() is 0-indexed
  const currentDay = today.getDate();

  let age = currentYear - birthYear;

  // Adjust age if the birth date hasn't occurred yet this year
  if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
    age--;
  }

  return age;
}

function getDurationUntilToday(startDateString) {
  const startDate = new Date(startDateString);
  const today = new Date();

  // Calculate the difference in years and months
  let years = today.getFullYear() - startDate.getFullYear();
  let months = today.getMonth() - startDate.getMonth();
  let days = today.getDate() - startDate.getDate();

  // Adjust for cases where the current date's month or day is before the start date's month or day
  if (days < 0) {
    months--;
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  // Build the duration string
  let duration = "";
  if (years > 0) {
    duration += `${years} year${years > 1 ? "s" : ""}`;
  }
  if (months > 0) {
    // Add " and " only if years are also present
    if (duration !== "") {
      duration += " and ";
    }
    duration += `${months} month${months > 1 ? "s" : ""}`;
  }

  // Handle the case where the duration is less than a month
  if (duration === "") {
    return "less than a month";
  }

  return duration;
}

document.getElementById('lastWorkDuration').textContent = getDurationUntilToday('2022-06-06');