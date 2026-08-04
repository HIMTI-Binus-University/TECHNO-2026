export interface FaqItem {
  id: string
  category: string
  question: string
  answer: string
  question2: string
  answer2: string
  question3: string
  answer3: string
}

export const faqItems: FaqItem[] = [
  {
    id: '1',
    category: 'TECHNO',
    question: '1. Will transportation be provided for participants to the TECHNO 2026 venue?',
    answer:
      'More information will be provided regarding this very soon, so sit tight!',
    question2: '2. Is it still permissible to register as a HIMTI activist even if you don\'t take part in the TECHNO 2026 event?',
    answer2: 'Participants can still join as HIMTI activists even if they don\'t take part in the TECHNO 2026 event. However, it would be better if participants take part in the TECHNO 2026 event to get to know HIMTI better.',
    question3: '',
    answer3: ''
  },
  {
    id: '2',
    category: 'Pembelajaran Bahasa Pemrograman(PBP)',
    question: '1. Why should you learn the C and Python programming languages?',
    answer:
      'For a beginner, C and Python are programming languages that can be used to understand the principles of programming algorithms easily. The C language is also used in the early stages of lectures by all SoCS majors in the Algorithm and Programming course, and the Python language is also used by SoCS Senayan students.',
    question2: '2. What is IDE and Compiler?',
    answer2: 'IDE (Integrated Development Environment) is an application software used to write code. A compiler is software that can convert source code or programming code into machine language so that it can be run by a computer.',
    question3: '',
    answer3: ''
  },
  {
    id: '3',
    category: 'An example of an IDE is DEV-C++',
    question: '1. Is it permissible to use an IDE other than Dev-C++?',
    answer:
      'Although many other IDEs and compilers can support C language programs (such as Visual Studio, Geany, and Clang). The Dev-C++ IDE and TDM-GCC compiler (which is installed by default on Dev-C++) are the IDEs used in learning sessions and practical exams, as determined by the BINUS University SLC (Software Laboratory Center).',
    question2: '2. Is PBP mandatory?',
    answer2: 'PBP is not mandatory to follow. But it would be better to follow it as a preparation for starting the first semester of lectures.',
    question3: '',
    answer3: ''
  },
  {
    id: '4',
    category: 'HIMTI KIT',
    question: '1. What is HIMTI KIT?',
    answer:
      'HIMTI KIT is a starter kit which consists of a summary of material from several courses that support SoCS students studies over the next few semesters.',
    question2: '2. What conditions are needed to access HIMTI KIT?',
    answer2: 'To get access to the HIMTI KIT, BINUSIAN SoCS 2029 is registered to be present at the TECHNO 2026 main event from the start to the end of the event via the attendance form announced by the committee during the event. When HIMTI KIT can be accessed and how to access HIMTI KIT will be informed via the TECHNO 2026 participant LINE group. So that after the main event ends, it is hoped that participants will not leave the group first.',
    question3: '',
    answer3: ''
  },
  {
    id: '5',
    category: 'Twibbon',
    question: '1. Will I have to upload a Twibbon to Instagram if I want to follow TECHNO?',
    answer:
      'Yes there will be a twibbon for participants of the TECHNO event.',
    question2: '',
    answer2: '',
    question3: '',
    answer3: ''
  },
  {
    id: '6',
    category: 'HIMTI Activist',
    question: '1. Does being a HIMTI activist interfere with your lecture activities?',
    answer:
      'Being a HIMTI activist certainly does not interfere with lectures. By becoming a HIMTI activist you can also improve many of the soft skills needed in the future. However, it is also important for you to be able to manage your time well between lectures, organizations and other activities.',
    question2: '2. Who can register to become a HIMTI activist?',
    answer2: 'All School of Computer Science (SoCS) students have the opportunity to register as HIMTI activists. This is an opportunity for SoCS students to develop themselves.',
    question3: '3. I have no experience in any organization before. Can I still register to become a HIMTI activist?',
    answer3: 'HIMTI activist registration is open to all SoCS students, both those who have or have never been involved in organizational activities. HIMTI can be the right choice to increase your organizational experience.'
  },
]