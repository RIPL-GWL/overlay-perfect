// Public team profiles only: photo, name, designation, focus areas and universities. Add members here.
export type TeamMember = {
  name: string;
  designation: string;
  focus?: string;
  universities: string[];
  photo?: string;
};

export const TEAM: TeamMember[] = [
  {
    name: "Mr. Harsh Raj Sharma",
    designation: "Founder & Managing Director (MD)",
    focus: "Business Strategy & Growth and all kind of management",
    universities: [
      "MBA from CU",
      "PGD in Business Analytics & Visualisation with Business Ethics & Sustainability, Strategic Management & Business Policy from VU",
    ],
  },
];
