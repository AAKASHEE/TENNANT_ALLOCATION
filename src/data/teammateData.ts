import { Teammate, FilterOptions } from '../types';

export const teammateData: Teammate[] = [
  {
    id: "1",
    name: "Aakash Patra",
    photo: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150",
    age: 20,
    gender: "Male",
    course: "Electrical Engineering",
    year: "2nd Year",
    housingPreference: ["2 BHK", "Near College", "Semi-Furnished"],
    traits: ["Non-smoker", "Early riser", "Organized", "Studious"],
    bio: "Hi! I'm a second-year EE student looking for roommates. I'm organized, studious, and prefer a quiet environment for studying. I enjoy playing sports and am always up for a good conversation.",
    contact: "aakashpatra253@gmail.com"
  },
  {
    id: "2",
    name: "Rahul Kumar",
    photo: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150",
    age: 21,
    gender: "Male",
    course: "Computer Science",
    year: "3rd Year",
    housingPreference: ["3 BHK", "Furnished", "Near Metro"],
    traits: ["Non-smoker", "Night owl", "Tech enthusiast", "Vegetarian"],
    bio: "CSE student passionate about coding and technology. Looking for like-minded roommates who enjoy tech discussions and maintain a clean living space.",
    contact: "rahul.k@example.com"
  },
  {
    id: "3",
    name: "Priya Singh",
    photo: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
    age: 19,
    gender: "Female",
    course: "Electronics Engineering",
    year: "1st Year",
    housingPreference: ["2 BHK", "Gated Community", "Near College"],
    traits: ["Non-smoker", "Early riser", "Fitness enthusiast", "Vegetarian"],
    bio: "First-year student looking for female roommates. I'm neat, organized, and enjoy working out. Seeking a peaceful environment for studies.",
    contact: "priya.s@example.com"
  },
  {
    id: "4",
    name: "Amit Sharma",
    photo: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150",
    age: 22,
    gender: "Male",
    course: "Mechanical Engineering",
    year: "4th Year",
    housingPreference: ["3 BHK", "Near Metro", "Furnished"],
    traits: ["Non-smoker", "Sports enthusiast", "Social", "Non-vegetarian"],
    bio: "Final year student who enjoys sports and socializing. Looking for roommates who are okay with occasional gatherings but respect study time.",
    contact: "amit.s@example.com"
  },
  {
    id: "5",
    name: "Neha Gupta",
    photo: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150",
    age: 20,
    gender: "Female",
    course: "Information Technology",
    year: "2nd Year",
    housingPreference: ["2 BHK", "Near College", "Gated Community"],
    traits: ["Non-smoker", "Bookworm", "Music lover", "Vegetarian"],
    bio: "IT student who loves reading and music. Looking for female roommates who appreciate a quiet, peaceful living environment.",
    contact: "neha.g@example.com"
  }
];

export const filterOptions: FilterOptions = {
  housingPreference: ["1 BHK", "2 BHK", "3 BHK", "Furnished", "Semi-Furnished", "Near College", "Near Metro", "Gated Community"],
  traits: ["Non-smoker", "Early riser", "Night owl", "Vegetarian", "Non-vegetarian", "Fitness enthusiast", "Sports enthusiast", "Tech enthusiast", "Bookworm", "Music lover", "Social", "Organized", "Studious"],
  gender: ["Male", "Female"],
  year: ["1st Year", "2nd Year", "3rd Year", "4th Year"]
};