// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 0,
    name: 'Gautam Sharma',
    image: "images/gautam.png",
    designation: 'React JS | NEXT JS | Node | GraphQL',
    view: "Hey everyone! I wanted to take a moment to recommend Kartik Sharma for any React.js opportunities. I had the pleasure of working with him on multiple projects where he showcased a strong understanding of React.js and Next.js concepts and delivered high-quality code. Highly recommended! 👍! 🌟",
    linkednURL: ""
  },
  
  {
    id: 2,
    name: 'Ankit Soni',
    image: "images/ankit.png",
    designation: 'MERN | JavaScript | Tailwind | Bootstrap',
    view: "I wholeheartedly recommend Kartik as a talented React frontend developer with an incredible flair for UI/UX design. His proficiency in Node.js further enhances his capabilities, allowing him to build robust and scalable applications.",
    linkednURL: ""
  },
 
]
export default function handler(req, res) {
  res.status(200).json(recommendationCard)
}
