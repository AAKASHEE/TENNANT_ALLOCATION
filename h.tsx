// Types
interface Photo {
    url: string;
    caption: string;
  }
  
  interface VideoDetails { // Renamed from `Video` to avoid conflict
    url: string;
    title: string;
  }
  
  interface Property {
    id: string;
    location: string;
    description: string;
    image: string;
    price: string;
    amenities: string[];
    photos: Photo[];
    videos: VideoDetails[];
  }
  // Contact Dialog Component
  interface ContactDialogProps {
    isOpen: boolean;
    onClose: () => void;
  }
  
  
  
  // Property Data
  const propertyData: Property[] = [
    {
      id: ":1",
      location: "113, Ground Floor, 5th Cross, Teacher's Colony,Kumarswamy Layout",
      description: "Kumarswamy Layout, Near Dayananda Sagar College",
      image: "../../img/prop_1/IMG_0151.jpg",
      price: "₹13,800/month",
      amenities: [
        "2 BHK",
        "Semi-Furnished",
        "24/7 Water Supply",
        "Geyser",
        "Water + Electricity Bill Excluded",
        "College Distance: 150m",
        "Main market-vicinity"
      ],
      photos: [
        { url: '../../img/prop_1/IMG_0149.jpg', caption: 'Entrance' },
        { url: '../../img/prop_1/IMG_0150.jpg', caption: 'Front View' },
        { url: '../../img/prop_1/IMG_0147.jpg', caption: 'Bedroom 1' },
        { url: '../../img/prop_1/IMG_0160.jpg', caption: 'Bedroom 2' },
        { url: '../../img/prop_1/IMG_0152.jpg', caption: 'Street View: Towards Main Road' },
        { url: '../../img/prop_1/IMG_0153.jpg', caption: 'Street View' },
        { url: '../../img/prop_1/IMG_0161.jpg', caption: 'Hall' },
        { url: '../../img/prop_1/IMG_0162.jpg', caption: 'Bathroom' },
        { url: '../../img/prop_1/IMG_0164.jpg', caption: 'Hallway' },
      ],
      videos: [
        { url: '../../vid/prop:1/IMG_0158.mp4', title: 'BEDROOM 01' },
        { url: '../../vid/prop:1/IMG_0157.mp4', title: 'BEDROOM 02' },
        { url: '../../vid/prop:1/IMG_0167.mp4', title: 'HALL' },
        { url: '../../vid/prop:1/IMG_0168.mp4', title: 'KITCHEN' },
        { url: '../../vid/prop:1/IMG_0159.mp4', title: 'BATHROOM' },
        { url: '../../vid/prop:1/IMG_4844.mp4', title: 'OUTSIDE DAY' },
        { url: '../../vid/prop:1/IMG_0169.mp4', title: 'OUTSIDE NIGHT' },
      ]
    },
    {
      id: "2",
      location: "113, Ground Floor, 4th Cross, Teacher's Colony,Kumarswamy Layout",
      description: "Kumarswamy Layout, Near Dayananda Sagar College",
      image: "../../img/prop_2/IMG_0222.jpg",
      price: "₹25,000/month",
      amenities: [
        "2 BHK",
        "Fully Furnished",
        "24/7 Power Backup",
        "Modular Kitchen",
        "Metro Distance: 500m",
        "Main Market Vicinity",
        "Balcony Access",
        "Spacious Rooms",
        "Each Bedrooms has Its Own attached Bathrooms"
      ],
      photos: [
        { url: '../../img/prop_2/IMG_0220.jpg', caption: 'Road towards Property' },
        { url: '../../img/prop_2/IMG_0221.jpg', caption: 'Road towards Main Road' },
        { url: '../../img/prop_2/IMG_0222.jpg', caption: 'Front face' },
        { url: '../../img/prop_2/IMG_0223.jpg', caption: 'Stairs ' },
        { url: '../../img/prop_2/IMG_0224.jpg', caption: 'Hall' },
        { url: '../../img/prop_2/IMG_0225.jpg', caption: 'Bedroom 01' },
        { url: '../../img/prop_2/IMG_0226.jpg', caption: 'Bedroom 01' },
        { url: '../../img/prop_2/IMG_0227.jpg', caption: 'Wardrobe Bedroom 01' },
        { url: '../../img/prop_2/IMG_0228.jpg', caption: 'Wardrobe Bedroom 01' },
        { url: '../../img/prop_2/IMG_0229.jpg', caption: 'Full View Bedroom 01' },
        { url: '../../img/prop_2/IMG_0230.jpg', caption: 'Bathroom 01' },
        { url: '../../img/prop_2/IMG_0231.jpg', caption: 'Building Gym' },
        { url: '../../img/prop_2/IMG_0232.jpg', caption: 'Bedroom 02' },
        { url: '../../img/prop_2/IMG_0235.jpg', caption: 'Bedroom 02 Balcony' },
        { url: '../../img/prop_2/IMG_0236.jpg', caption: 'Bedroom 02 Wardrobe' },
        { url: '../../img/prop_2/IMG_0237.jpg', caption: 'Bathroom 02' },
        { url: '../../img/prop_2/IMG_0238.jpg', caption: 'Dedicated Kitchen' },
        { url: '../../img/prop_2/IMG_0239.jpg', caption: 'Dedicated Kitchen Full View' },
        { url: '../../img/prop_2/IMG_0240.jpg', caption: 'Pooja Room/Store Room' },
      ],
      videos: [
        { url: '../../vid/prop:2/IMG_0203.mp4', title: 'Hall' },
        { url: '../../vid/prop:2/IMG_0204.mp4', title: 'Room 01' },
        { url: '../../vid/prop:2/IMG_0242.mp4', title: 'Room 01 Overview' },
        { url: '../../vid/prop:2/IMG_0205.mp4', title: 'Dedicated Kitchen' },
        { url: '../../vid/prop:2/IMG_0206.mp4', title: 'Common Wash Basin' },
        { url: '../../vid/prop:2/IMG_0207.mp4', title: 'Room 02' },
        { url: '../../vid/prop:2/IMG_0233.mp4', title: 'Room 02 Balcony View' },
        { url: '../../vid/prop:2/IMG_0234.mp4', title: 'Balcony View' },
        { url: '../../vid/prop:2/IMG_0241.mp4', title: 'Room 02 Bathroom' },
        { url: '../../vid/prop:2/IMG_0244.mp4', title: 'Neighborhood Tour' },
      ]
    }
  ];