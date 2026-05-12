import {
  BarChart3,
  BrainCircuit,
  ClipboardCheck,
  FileSearch,
  History,
  LineChart,
  MessageSquareText,
  ShieldCheck,
  Target,
  Upload,
} from "lucide-react";

import type { FaqItem, Feature, PublicNavItem, WorkflowStep } from "./types";

export const publicNavItems: PublicNavItem[] = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Report", href: "#report-preview" },
  { label: "FAQ", href: "#faq" },
];

export const featureItems: Feature[] = [
  {
    title: "Resume intelligence",
    description: "Extracts resume signals so practice questions match the candidate's actual profile.",
    icon: FileSearch,
  },
  {
    title: "Role and JD interviews",
    description: "Creates role-specific interview flows from a selected target role or pasted job description.",
    icon: Target,
  },
  {
    title: "Text-based AI interview",
    description: "Runs the MVP interview flow in a focused chat experience before voice is added later.",
    icon: MessageSquareText,
  },
  {
    title: "Score reports",
    description: "Turns answers into clear readiness scores, feedback notes, and next-step recommendations.",
    icon: ClipboardCheck,
  },
  {
    title: "Interview history",
    description: "Keeps practice attempts organized so candidates can compare progress over time.",
    icon: History,
  },
  {
    title: "AI reliability layer",
    description: "Foundation for prompt versions, validation, retries, logs, and cost-aware model routing.",
    icon: ShieldCheck,
  },
];

export const workflowSteps: WorkflowStep[] = [
  {
    step: "01",
    title: "Upload resume",
    description: "Start with a PDF resume so HireMinds understands experience, skills, and projects.",
  },
  {
    step: "02",
    title: "Choose role or paste JD",
    description: "Practice for a role template or use a real job description from a target company.",
  },
  {
    step: "03",
    title: "Take the AI interview",
    description: "Answer structured questions in a calm text interview built around the role.",
  },
  {
    step: "04",
    title: "Review the score report",
    description: "Get readiness scores, weak areas, resume alignment, and improvement actions.",
  },
];

export const valueItems = [
  { label: "Resume-aware interviews", icon: Upload },
  { label: "Role-specific questions", icon: BrainCircuit },
  { label: "Instant feedback reports", icon: BarChart3 },
  { label: "Progress tracking", icon: LineChart },
];

export const faqItems: FaqItem[] = [
  {
    question: "What is HireMinds?",
    answer:
      "HireMinds is an AI interview and career-preparation platform for candidates who want realistic practice, resume-aware questions, and clear score reports.",
  },
  {
    question: "Is the interview live or text-based?",
    answer:
      "The MVP starts with a text-based AI interview. Voice and proctoring can be added after the core interview workflow is stable.",
  },
  {
    question: "Do I need a resume?",
    answer:
      "A resume gives better personalization, but the flow can also work from a role or job description when resume upload is skipped.",
  },
  {
    question: "Can I paste a job description?",
    answer:
      "Yes. Candidates can paste a JD so the interview questions and feedback align with the exact role they are preparing for.",
  },
  {
    question: "What do I get after the interview?",
    answer:
      "You receive a scored report with communication, technical fit, resume alignment, role readiness, feedback notes, and suggested actions.",
  },
  {
    question: "Is this for recruiters too?",
    answer:
      "Recruiter workflows are planned after the candidate MVP. The first public website focuses on candidate interview preparation.",
  },
];
