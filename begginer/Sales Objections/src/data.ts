import { TQuestion } from "./types";

const QUESTIONS: TQuestion[] = [
  {
    title: "Is too expensive | Your price is too high",
    options: [
      {
        label: "Do you care more about the price or the outcome?",
        isCorrect: true,
      },
      {
        label: "Try looking for something cheaper, ha",
        isCorrect: false,
      },
      {
        label: "Is too expensive for you!",
        isCorrect: false,
      },
      {
        label: "Get lost cheap",
        isCorrect: false,
      },
    ],
  },
  {
    title: "I'm not interested",
    options: [
      {
        isCorrect: false,
        label: "No problem! Come back later!",
      },
      {
        isCorrect: false,
        label: "Why are you not interested though?",
      },
      {
        isCorrect: true,
        label:
          "What specifically about this product/opportunity is not interesting to you?",
      },
      {
        isCorrect: false,
        label: "I'm not asking you to make a decision right now...",
      },
    ],
  },
  {
    title: "I can't afford this",
    options: [],
  },
  {
    title: "Need to talk with my wife/husband about it",
    options: [],
  },
  {
    title: "We built a solution ourselves",
    options: [],
  },
  {
    title: "We are working with X already",
    options: [],
  },
  {
    title: "Can you make it for cheaper?",
    options: [],
  },
  {
    title: "Can I get a discount?",
    options: [],
  },
  {
    title: "This isn't the right time",
    options: [],
  },
  {
    title: "I don't know how this service will help me",
    options: [],
  },
  {
    title: "I don't think we need this",
    options: [],
  },
  {
    title: "This isn't our priority right now",
    options: [],
  },
  {
    title: "I'm busy",
    options: [],
  },
  {
    title: "How did you get my information?",
    options: [],
  },
  {
    title: "I've never heard of your company",
    options: [],
  },
  {
    title: "We're happy the way things are",
    options: [],
  },
  {
    title: "I saw a bad review of your company",
    options: [],
  },
];

export default QUESTIONS;
