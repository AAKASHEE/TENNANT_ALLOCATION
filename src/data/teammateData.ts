import { Teammate, FilterOptions } from '../types';

// Sample teammate data
export const teammateData: Teammate[] = [
  {
    id: "1",
    name: "Rahul Sharma",
    photo: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150",
    age: 21,
    gender: "Male",
    course: "Computer Science",
    year: "2nd Year",
    housingPreference: ["2 BHK", "Near College"],
    traits: ["Non-smoker", "Occasional drinking", "Gym enthusiast", "Vegetarian", "Early riser"],
    bio: "Looking for a studious roommate to share a flat near DSC. I'm organized and prefer a quiet environment for studying.",
    contact: "rahul.s@example.com"
  },
  {
    id: "2",
    name: "Priya Patel",
    photo: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
    age: 20,
    gender: "Female",
    course: "Electronics Engineering",
    year: "1st Year",
    housingPreference: ["3 BHK", "Furnished"],
    traits: ["Non-smoker", "Non-drinker", "Yoga practitioner", "Vegetarian", "Night owl"],
    bio: "Hi! I'm looking for female roommates to share a furnished apartment. I'm neat, friendly and respect personal space.",
    contact: "priya.p@example.com"
  },
  {
    id: "3",
    name: "Amit Kumar",
    photo: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150",
    age: 22,
    gender: "Male",
    course: "Mechanical Engineering",
    year: "3rd Year",
    housingPreference: ["2 BHK", "Budget-friendly"],
    traits: ["Smoker", "Social drinker", "Football player", "Non-vegetarian", "Flexible schedule"],
    bio: "Looking for a laid-back roommate who enjoys sports and doesn't mind occasional parties. I'm easygoing and friendly.",
    contact: "amit.k@example.com"
  },
  {
    id: "4",
    name: "Riya Mehta",
    photo: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150",
    age: 21,
    gender: "Female",
    course: "Information Technology",
    year: "2nd Year",
    housingPreference: ["1 BHK", "Gated community"],
    traits: ["Non-smoker", "Non-drinker", "Fitness enthusiast", "Vegetarian", "Early riser"],
    bio: "Seeking a female roommate who is clean, organized and respects privacy. I prefer a peaceful living environment.",
    contact: "riya.m@example.com"
  },
  {
    id: "5",
    name: "Vikram Singh",
    photo: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150",
    age: 23,
    gender: "Male",
    course: "Civil Engineering",
    year: "4th Year",
    housingPreference: ["3 BHK", "Close to metro"],
    traits: ["Non-smoker", "Occasional drinking", "Cricket player", "Non-vegetarian", "Night owl"],
    bio: "Final year student looking for roommates who are okay with occasional gatherings. I'm responsible and considerate.",
    contact: "vikram.s@example.com"
  },
  {
    id: "6",
    name: "Ananya Gupta",
    photo: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=150",
    age: 20,
    gender: "Female",
    course: "Business Administration",
    year: "1st Year",
    housingPreference: ["2 BHK", "Furnished"],
    traits: ["Non-smoker", "Social drinker", "Dance enthusiast", "Vegetarian", "Flexible schedule"],
    bio: "Friendly and outgoing person looking for roommates who enjoy socializing but also respect study time.",
    contact: "ananya.g@example.com"
  }
];

// Filter options
export const filterOptions: FilterOptions = {
  housingPreference: ["1 BHK", "2 BHK", "3 BHK", "Furnished", "Near College", "Budget-friendly", "Gated community", "Close to metro"],
  traits: ["Non-smoker", "Smoker", "Non-drinker", "Occasional drinking", "Social drinker", "Gym enthusiast", "Yoga practitioner", "Football player", "Cricket player", "Dance enthusiast", "Fitness enthusiast", "Vegetarian", "Non-vegetarian", "Early riser", "Night owl", "Flexible schedule"],
  gender: ["Male", "Female", "Other"],
  year: ["1st Year", "2nd Year", "3rd Year", "4th Year"]
};