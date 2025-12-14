// import React from "react";
// import "./aboutSection.css";
// import { Button, Typography, Avatar } from "@material-ui/core";
// import YouTubeIcon from "@material-ui/icons/YouTube";
// import InstagramIcon from "@material-ui/icons/Instagram";
// const About = () => {
//   const visitInstagram = () => {
//     window.location = "https://instagram.com/ahiran_jhunna";
//   };
//   return (
//     <div className="aboutSection">
//       <div></div>
//       <div className="aboutSectionGradient"></div>
//       <div className="aboutSectionContainer">
//         <Typography component="h1">About Us</Typography>

//         <div>
//           <div>
//             <Avatar
//               style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
//               src="https://res.cloudinary.com/tripleayt/image/upload/v1631555947/products/jpyibarlaxawvcvqjv5b.png"
//               alt="Founder"
//             />
//             <Typography>Abhishek Singh</Typography>
//             <Button onClick={visitInstagram} color="primary">
//               Visit Instagram
//             </Button>
//             <span>
//               This is a sample wesbite made by @jhunnakumar. 
          
//             </span>
//           </div>
//           <div className="aboutSectionContainer2">
//             <Typography component="h2">Our Brands</Typography>
//             <a
//               href="https://www.youtube.com/channel/UCO7afj9AUo0zV69pqEYhcjw"
//               target="blank"
//             >
//               <YouTubeIcon className="youtubeSvgIcon" />
//             </a>

//             <a href="https://instagram.com/meabhisingh" target="blank">
//               <InstagramIcon className="instagramSvgIcon" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;
import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";

const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/ahiran_jhunna";
  };

  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>

      <div className="aboutSectionContainer">
        <Typography component="h1">About Me</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="/Jhuna.jpg"
              alt="Founder"
            />

            <Typography component="h2">Jhunna Kumar</Typography>

            <Typography
              style={{ marginTop: "1vmax", fontSize: "1.2vmax", color: "#555" }}
            >
              B.Tech 4th Year – CSE (AIML)  
              <br />
              JIET, Jodhpur
            </Typography>

            <Button onClick={visitInstagram} color="primary">
              Visit My Instagram
            </Button>

            <span style={{ marginTop: "1vmax", display: "block" }}>
              This website is developed by <strong>Jhunna Kumar</strong> as part
              of learning MERN Development and improving full-stack skills.
            </span>
          </div>

          <div className="aboutSectionContainer2">
            <Typography component="h2">My Socials</Typography>

            <a
              href="https://www.youtube.com/channel/UCO7afj9AUo0zV69pqEYhcjw"
              target="blank"
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://instagram.com/ahiran_jhunna" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

