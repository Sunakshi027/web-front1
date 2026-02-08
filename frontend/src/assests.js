import profile1 from './assets/jacl1.avif'
import profile2 from './assets/alina.jpg';
import profile3 from './assets/bob.jpg';
import profile4 from './assets/hazel.jpg';
import profile5 from './assets/tia.jpg';
import img1 from "./assets/pic1.png";
import img2 from "./assets/pic2.png";
import img3 from "./assets/pic3.png"
export const userDummyData = [
  {
    _id: "1",
    fullName: "jack",
    email: "alison@gmail.com",
    profilePic: profile1,
    bio: "Frontend Developer",
  },
  {
    _id: "2",
    fullName: "Alina",
    email: "marco@gmail.com",
    profilePic: profile2,
    bio: "Backend Developer",
  },
  {
    _id: "3",
    fullName: "Bob",
    email: "marco@gmail.com",
    profilePic: profile3,
    bio: "Backend Developer",
  },
  {
    _id: "4",
    fullName: "Hazel",
    email: "marco@gmail.com",
    profilePic: profile4,
    bio: "Backend Developer",
  },
  {
    _id: "5",
    fullName: "Tia",
    email: "marco@gmail.com",
    profilePic: profile5,
    bio: "Backend Developer",
  },
];

export const imagesDummyData = [img1, img2, img3, img2, img3, ]

export const messagesDummyData = [
    {
        "_id": "680f571ff10f3cd28382f094",
        "senderId": "680f5116f10f3cd28382ed02",
        "receiverId": "680f50e4f10f3cd28382ecf9",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "seen": true,
        "createdAt": "2025-04-28T10:23:27.844Z",
    },
    {
        "_id": "680f5726f10f3cd28382f0b1",
        "senderId": "680f50e4f10f3cd28382ecf9",
        "receiverId": "680f5116f10f3cd28382ed02",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "seen": true,
        "createdAt": "2025-04-28T10:23:34.520Z",
    },
    {
        "_id": "680f5729f10f3cd28382f0b6",
        "senderId": "680f5116f10f3cd28382ed02",
        "receiverId": "680f50e4f10f3cd28382ecf9",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "seen": true,
        "createdAt": "2025-04-28T10:23:37.301Z",
    },
    {
        "_id": "680f572cf10f3cd28382f0bb",
        "senderId": "680f50e4f10f3cd28382ecf9",
        "receiverId": "680f5116f10f3cd28382ed02",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "seen": true,
        "createdAt": "2025-04-28T10:23:40.334Z",
    },
    {
        "_id": "680f573cf10f3cd28382f0c0",
        "senderId": "680f50e4f10f3cd28382ecf9",
        "receiverId": "680f5116f10f3cd28382ed02",
        "image": profile1,
        "seen": true,
        "createdAt": "2025-04-28T10:23:56.265Z",
    },
    {
        "_id": "680f5745f10f3cd28382f0c5",
        "senderId": "680f5116f10f3cd28382ed02",
        "receiverId": "680f50e4f10f3cd28382ecf9",
        "image": profile2,
        "seen": true,
        "createdAt": "2025-04-28T10:24:05.164Z",
    },
    {
        "_id": "680f5748f10f3cd28382f0ca",
        "senderId": "680f5116f10f3cd28382ed02",
        "receiverId": "680f50e4f10f3cd28382ecf9",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "seen": true,
        "createdAt": "2025-04-28T10:24:08.523Z",
    }
]