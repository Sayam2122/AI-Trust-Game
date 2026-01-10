import React, { useState } from 'react';
import { CheckCircle, XCircle, Brain, FileText, TrendingDown, Briefcase, Heart, ArrowRight, Award, Film, Mail, AlertTriangle, Camera, Cloud } from 'lucide-react';

const scenarios = [
  {
    id: 1,
    title: "Movie Recommendation System",
    description: "AI recommends movies based on your watch history.",
    icon: Film,
    correctChoice: "trust",
    correctFeedback: "✔ This is a low-risk task where AI personalization works well.",
    wrongFeedback: "✗ Wrong Choice: Even if recommendations are imperfect, the impact is small and safe. ℹ️ AI is actually helpful here for personalization.",
    lesson: "AI excels at low-risk personalization tasks.",
    focus: "Safe Personalization"
  },
  {
    id: 2,
    title: "AI Study Reminder App",
    description: "An AI app notices when a student usually studies and sends reminders before their regular study time.",
    icon: TrendingDown,
    correctChoice: "trust",
    correctFeedback: "✔ This is a low-risk use where AI helps build good habits without making important decisions.",
    wrongFeedback: "✗ Wrong Choice: Even if reminders are not perfect, there is no serious harm. ℹ️ AI is helpful here.",
    lesson: "AI works well for supportive, low-stakes assistance.",
    focus: "Helpful Automation"
  },
  {
    id: 3,
    title: "AI Grading Exams",
    description: "An AI automatically checks and grades student essays without any human review.",
    icon: FileText,
    correctChoice: "dont-trust",
    correctFeedback: "✔ AI can help with grammar or plagiarism, but creativity, reasoning, and fairness need human judgment.",
    wrongFeedback: "✗ Wrong Choice: AI cannot truly understand ideas, originality, or context. ⚠️ Blind trust may lead to unfair grading.",
    lesson: "AI lacks the ability to understand nuance, creativity, and context in subjective work.",
    focus: "Fairness & Context"
  },
  {
    id: 4,
    title: "Spam Email Filter",
    description: "AI automatically marks spam emails.",
    icon: Mail,
    correctChoice: "trust",
    correctFeedback: "✔ AI is good at repetitive pattern-based tasks like spam detection.",
    wrongFeedback: "✗ Wrong Choice: Occasional mistakes are harmless and can be corrected easily. ℹ️ AI is quite reliable for this task.",
    lesson: "AI is excellent for pattern recognition in low-consequence scenarios.",
    focus: "Pattern Recognition"
  },
  {
  id: 5,
  title: "AI Face Recognition for Attendance",
  description: "A school uses AI-based face recognition to mark daily attendance, with teachers able to correct mistakes if needed.",
  icon: Camera,
  correctChoice: "trust",
  correctFeedback: "✔ With human oversight, AI attendance systems can save time and work efficiently.",
  wrongFeedback: "✗ Wrong Choice: When monitored by teachers, small errors can be fixed easily. ℹ️ Human supervision makes this safer.",
  lesson: "AI can be trusted when used with human oversight.",
  focus: "Human-in-the-Loop"
  },
  {
    id: 6,
    title: "Weather Forecast App",
    description: "An AI-based app predicts tomorrow's weather.",
    icon: Cloud,
    correctChoice: "trust",
    correctFeedback: "✔ AI handles large data patterns well, but forecasts are probabilities, not guarantees.",
    wrongFeedback: "✗ Wrong Choice: While not perfect, weather AI is useful for planning and low-risk decisions. ℹ️ This is actually a good use case for AI.",
    lesson: "AI is effective for probabilistic predictions in low-risk contexts.",
    focus: "Data Analysis"
  },
  {
    id: 7,
    title: "AI Resume Ranking",
    description: "AI ranks job resumes from best to worst, and only the top-ranked candidates are seen by the recruiter.",
    icon: Briefcase,
    correctChoice: "dont-trust",
    correctFeedback: "✔ Resume ranking can hide strong candidates due to bias or missing context.",
    wrongFeedback: "✗ Wrong Choice: Small ranking errors can block real opportunities. ⚠️ Human review is important.",
    lesson: "AI rankings can unfairly affect life-changing opportunities.",
    focus: "Hidden Bias"
  },
  {
    id: 8,
    title: "AI Detecting Exam Cheating",
    description: "AI flags students for cheating based on eye movement during online exams.",
    icon: AlertTriangle,
    correctChoice: "dont-trust",
    correctFeedback: "✔ Stress, disability, or natural movement can be misinterpreted as cheating.",
    wrongFeedback: "✗ Wrong Choice: Such systems can falsely accuse innocent students and cause serious harm. ⚠️ False accusations can ruin reputations.",
    lesson: "Behavioral AI can misinterpret natural variations as violations.",
    focus: "False Accusations"
  },
  {
    id: 9,
    title: "AI Medical Advice App",
    description: "An AI app suggests diagnosis and treatment for illnesses.",
    icon: Heart,
    correctChoice: "dont-trust",
    correctFeedback: "✔ Medical decisions are high-risk and require trained doctors and human responsibility.",
    wrongFeedback: "✗ Wrong Choice: AI mistakes in healthcare can cause serious harm. ⚠️ It should assist doctors, not replace them.",
    lesson: "High-stakes decisions require human expertise and accountability.",
    focus: "High-Risk Decisions"
  },
  {
    id: 10,
    title: "AI Language Translation",
    description: "AI translates text from one language to another for general communication.",
    icon: Mail,
    correctChoice: "trust",
    correctFeedback: "✔ AI translation is highly accurate for most contexts and enables global communication.",
    wrongFeedback: "✗ Wrong Choice: Modern AI translation is quite reliable for general use. ℹ️ Though human review is wise for critical legal documents.",
    lesson: "AI can break down language barriers effectively for everyday communication.",
    focus: "Communication & Access"
  },
  {
    id: 11,
    title: "AI Budget Insights",
    description: "A finance app uses AI to show spending charts and monthly expense summaries to users.",
    icon: Briefcase,
    correctChoice: "trust",
    correctFeedback: "✔ AI is useful for organizing data and showing patterns without making final decisions.",
    wrongFeedback: "✗ Wrong Choice: This AI does not control money, it only shows insights. ℹ️ It’s safe to use.",
    lesson: "AI is reliable for data analysis and visualization.",
    focus: "Decision Support"
  },
  {
    id: 12,
    title: "AI Content Moderation",
    description: "AI automatically removes harmful content from social media platforms.",
    icon: AlertTriangle,
    correctChoice: "trust",
    correctFeedback: "✔ AI can quickly scan massive amounts of content to protect users, though human review is important for edge cases.",
    wrongFeedback: "✗ Wrong Choice: AI moderation helps protect users at scale. ℹ️ While not perfect, it's essential for managing billions of posts.",
    lesson: "AI is effective at scale for identifying harmful patterns, with human oversight for complex cases.",
    focus: "Content Safety"
  }
];

const patternOptions = [
  { text: "AI is always neutral", correct: false },
  { text: "AI is good at speed", correct: true },
  { text: "AI understands emotions like humans", correct: false },
  { text: "AI depends on data quality", correct: true },
  { text: "AI decisions are always correct", correct: false },
  { text: "Humans must review AI decisions", correct: true },
  { text: "Automation always means AI", correct: false },
  { text: "AI works best in low-risk tasks", correct: true }
];

export default function AITrustGame() {
  const [screen, setScreen] = useState('intro');
  const [currentScenario, setCurrentScenario] = useState(0);
  const [userChoice, setUserChoice] = useState(null);
  const [selectedPatterns, setSelectedPatterns] = useState([]);
  const [patternSubmitted, setPatternSubmitted] = useState(false);
  const [reflectionText, setReflectionText] = useState({ for: '', notFor: '' });
  const [reflectionSubmitted, setReflectionSubmitted] = useState(false);
  const [choices, setChoices] = useState([]);

  const handleChoice = (choice) => {
    setUserChoice(choice);
    const newChoices = [...choices, { 
      scenario: currentScenario, 
      choice,
      correct: choice === scenarios[currentScenario].correctChoice
    }];
    setChoices(newChoices);
  };

  const nextScenario = () => {
    setUserChoice(null);
    if (currentScenario < scenarios.length - 1) {
      setCurrentScenario(currentScenario + 1);
    } else {
      setScreen('pattern');
    }
  };

  const togglePattern = (pattern) => {
    if (selectedPatterns.includes(pattern)) {
      setSelectedPatterns(selectedPatterns.filter(p => p !== pattern));
    } else {
      setSelectedPatterns([...selectedPatterns, pattern]);
    }
  };

  const getPatternFeedback = () => {
    const correctSelected = selectedPatterns.filter(p => patternOptions.find(o => o.text === p)?.correct).length;
    const incorrectSelected = selectedPatterns.filter(p => !patternOptions.find(o => o.text === p)?.correct).length;
    
    if (incorrectSelected > 0) {
      return { type: "warning", message: "⚠️ AI can be biased, lacks emotions, and can make confident mistakes." };
    } else if (correctSelected >= 3) {
      return { type: "success", message: "✅ Good observation! You understand AI's strengths and limits." };
    } else {
      return { type: "info", message: "ℹ️ Think about what patterns you noticed across the scenarios." };
    }
  };

  const getReflectionFeedback = () => {
    const forText = reflectionText.for.toLowerCase();
    const notForText = reflectionText.notFor.toLowerCase();
    
    const lowRiskWords = ['recommendation', 'spam', 'pattern', 'weather', 'movie', 'email', 'translation', 'sorting'];
    const highRiskWords = ['medical', 'diagnosis', 'hiring', 'grading', 'cheating', 'decision', 'judge', 'life', 'health', 'employment'];
    
    const hasLowRisk = lowRiskWords.some(word => forText.includes(word));
    const hasHighRisk = highRiskWords.some(word => notForText.includes(word));
    
    if (forText.includes('everything') || notForText.includes('nothing')) {
      return { type: "warning", message: "⚠️ Think again — are there areas where mistakes can seriously harm people?" };
    } else if (notForText.includes('anything') || notForText.includes('everything')) {
      return { type: "info", message: "ℹ️ AI is useful in many safe tasks. The key is responsible use, not avoidance." };
    } else if (hasLowRisk && hasHighRisk) {
      return { type: "success", message: "✅ Excellent! You correctly identified low-risk vs high-risk AI use." };
    } else {
      return { type: "info", message: "ℹ️ Good thinking! Consider the difference between tasks with low vs high consequences." };
    }
  };

  const calculateScore = () => {
    const correctCount = choices.filter(c => c.correct).length;
    
    if (correctCount >= 10) return { badge: "🥇 AI Ethics Champion", level: "gold", score: correctCount };
    if (correctCount >= 7) return { badge: "🥈 Responsible User", level: "silver", score: correctCount };
    return { badge: "🥉 Careful Thinker", level: "bronze", score: correctCount };
  };

  const getGlobalFeedback = () => {
    const highRiskTrustCount = choices.filter(c => 
      !c.correct && c.choice === 'trust' && 
      ['dont-trust'].includes(scenarios[c.scenario].correctChoice)
    ).length;
    
    if (highRiskTrustCount >= 3) {
      return "⚠️ Be careful — some AI decisions can seriously affect lives.";
    }
    
    const correctCount = choices.filter(c => c.correct).length;
    if (correctCount >= 9) {
      return "✅ You understand responsible AI usage.";
    }
    
    return null;
  };

  const scenario = scenarios[currentScenario];
  const Icon = scenario?.icon;

  if (screen === 'intro') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6">
        <div className="max-w-2xl w-full bg-white rounded-3xl shadow-lg p-12 text-center">
          <div className="bg-gradient-to-br from-cyan-500 to-blue-600 w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Brain className="w-14 h-14 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Would You Trust This AI?</h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            AI makes decisions every day — from recommending videos to deciding who gets a job.
            <br /><strong className="text-gray-800">But should we always trust it?</strong>
          </p>
          <button
            onClick={() => setScreen('instructions')}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-4 px-10 rounded-xl text-lg transition-all transform hover:scale-105 shadow-md"
          >
            Start Activity
          </button>
        </div>
      </div>
    );
  }

  if (screen === 'instructions') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6">
        <div className="max-w-2xl w-full bg-white rounded-3xl shadow-lg p-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How It Works</h2>
          <p className="text-lg text-gray-600 mb-6">
            You will see real-life situations where AI makes a decision. For each one, choose:
          </p>
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-4 bg-emerald-50 p-5 rounded-xl border-2 border-emerald-200">
              <CheckCircle className="w-7 h-7 text-emerald-600" />
              <span className="text-lg font-semibold text-gray-800">Trust the AI</span>
            </div>
            <div className="flex items-center gap-4 bg-rose-50 p-5 rounded-xl border-2 border-rose-200">
              <XCircle className="w-7 h-7 text-rose-600" />
              <span className="text-lg font-semibold text-gray-800">Do not Trust the AI</span>
            </div>
          </div>
          <p className="text-gray-600 mb-8 text-lg">After each choice, you will see why it matters.</p>
          <button
            onClick={() => setScreen('gameplay')}
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all transform hover:scale-105 shadow-md"
          >
            Begin Round 1
          </button>
        </div>
      </div>
    );
  }

  if (screen === 'gameplay') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6">
        <div className="max-w-4xl w-full">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <span className="text-gray-700 font-semibold text-lg">Scenario {currentScenario + 1} of {scenarios.length}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2.5 rounded-full transition-all duration-500"
                style={{ width: `${((currentScenario + 1) / scenarios.length) * 100}%` }}
              />
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-10 mb-6">
            <div className="text-center">
              <div className="flex justify-center gap-6 mb-6">
                <div className="bg-gradient-to-br from-purple-100 to-blue-100 p-6 rounded-2xl">
                  <Icon className="w-16 h-16 text-blue-600" />
                </div>
                <div className="bg-gradient-to-br from-pink-100 to-purple-100 p-6 rounded-2xl">
                  <Brain className="w-16 h-16 text-purple-600" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Scenario {currentScenario + 1}: {scenario.title}</h3>
              <p className="text-xl text-gray-700 leading-relaxed">
                {scenario.description}
              </p>
            </div>
          </div>

          {!userChoice ? (
            <div className="grid grid-cols-2 gap-6">
              <button
                onClick={() => handleChoice('trust')}
                className="bg-gradient-to-br from-emerald-400 to-emerald-500 hover:from-emerald-500 hover:to-emerald-600 text-white font-bold py-6 px-8 rounded-2xl text-xl transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-3"
              >
                <CheckCircle className="w-6 h-6" />
                Trust the AI
              </button>
              <button
                onClick={() => handleChoice('dont-trust')}
                className="bg-gradient-to-br from-rose-400 to-rose-500 hover:from-rose-500 hover:to-rose-600 text-white font-bold py-6 px-8 rounded-2xl text-xl transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-3"
              >
                <XCircle className="w-6 h-6" />
                Don't Trust the AI
              </button>
            </div>
          ) : (
            <div>
              <div className="bg-white rounded-3xl shadow-lg p-8 mb-6">
                <div className={`p-6 rounded-2xl shadow-md mb-6 ${userChoice === scenario.correctChoice ? 'bg-green-50 border-2 border-green-300' : 'bg-red-50 border-2 border-red-300'}`}>
                  <p className="text-lg font-semibold text-gray-800 leading-relaxed">
                    {userChoice === scenario.correctChoice ? scenario.correctFeedback : scenario.wrongFeedback}
                  </p>
                </div>

                <div className="bg-cyan-50 p-6 rounded-2xl border-2 border-cyan-200 shadow-sm">
                  <div className="flex items-start gap-3">
                    <span className="text-3xl">🔑</span>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 text-lg">Lesson:</h4>
                      <p className="text-gray-700 text-base leading-relaxed">{scenario.lesson}</p>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={nextScenario}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-5 px-6 rounded-xl text-lg transition-all transform hover:scale-105 shadow-md"
              >
                {currentScenario < scenarios.length - 1 ? 'Next Scenario' : 'See Patterns'}
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (screen === 'pattern') {
    const feedback = patternSubmitted ? getPatternFeedback() : null;
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6">
        <div className="max-w-2xl w-full bg-white rounded-3xl shadow-lg p-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What Did You Notice?</h2>
          <p className="text-lg text-gray-600 mb-6">Select all that apply:</p>
          
          <div className="space-y-3 mb-6">
            {patternOptions.map((option) => (
              <button
                key={option.text}
                onClick={() => !patternSubmitted && togglePattern(option.text)}
                disabled={patternSubmitted}
                className={`w-full p-4 rounded-xl text-left font-semibold transition-all ${
                  patternSubmitted
                    ? option.correct && selectedPatterns.includes(option.text)
                      ? 'bg-green-100 text-green-800 border-2 border-green-400'
                      : !option.correct && selectedPatterns.includes(option.text)
                      ? 'bg-red-100 text-red-800 border-2 border-red-400'
                      : option.correct && !selectedPatterns.includes(option.text)
                      ? 'bg-blue-50 text-blue-700 border-2 border-blue-300'
                      : 'bg-gray-100 text-gray-500 border-2 border-gray-300'
                    : selectedPatterns.includes(option.text)
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-2 border-cyan-600 transform hover:scale-102 shadow-md'
                    : 'bg-gray-50 text-gray-800 border-2 border-gray-300 hover:border-cyan-400 transform hover:scale-102'
                }`}
              >
                <span className="mr-3 text-lg">
                  {patternSubmitted && option.correct && selectedPatterns.includes(option.text) && '✓'}
                  {patternSubmitted && !option.correct && selectedPatterns.includes(option.text) && '✗'}
                  {patternSubmitted && option.correct && !selectedPatterns.includes(option.text) && '✓'}
                  {patternSubmitted && !option.correct && !selectedPatterns.includes(option.text) && '✗'}
                  {!patternSubmitted && (selectedPatterns.includes(option.text) ? '✓' : '○')}
                </span>
                {option.text}
              </button>
            ))}
          </div>

          {feedback && (
            <div className={`p-4 rounded-xl mb-6 ${
              feedback.type === 'success' ? 'bg-green-50 border-2 border-green-300' :
              feedback.type === 'warning' ? 'bg-yellow-50 border-2 border-yellow-300' :
              'bg-blue-50 border-2 border-blue-300'
            }`}>
              <p className="text-lg font-semibold text-gray-800">{feedback.message}</p>
            </div>
          )}

          {!patternSubmitted ? (
            <button
              onClick={() => setPatternSubmitted(true)}
              disabled={selectedPatterns.length === 0}
              className={`w-full py-4 px-6 rounded-xl text-lg font-semibold transition-all ${
                selectedPatterns.length === 0
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white transform hover:scale-105 shadow-md'
              }`}
            >
              Submit Answers
            </button>
          ) : (
            <button
              onClick={() => setScreen('reflection')}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-4 px-6 rounded-xl text-lg font-semibold transition-all transform hover:scale-105 shadow-md flex items-center justify-center gap-2"
            >
              Continue <ArrowRight className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    );
  }

  if (screen === 'reflection') {
    const feedback = reflectionSubmitted ? getReflectionFeedback() : null;
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6">
        <div className="max-w-2xl w-full bg-white rounded-3xl shadow-lg p-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Reflection Question</h2>
          <p className="text-lg text-gray-600 mb-6">Complete the sentence:</p>
          
          <div className="mb-6">
            <div className="bg-gray-50 p-6 rounded-xl border-2 border-gray-200">
              <p className="text-lg mb-4 text-gray-700 leading-relaxed">
                AI should be used for{' '}
                <input
                  type="text"
                  value={reflectionText.for}
                  onChange={(e) => setReflectionText({ ...reflectionText, for: e.target.value })}
                  disabled={reflectionSubmitted}
                  className="border-b-2 border-cyan-500 bg-transparent px-2 py-1 focus:outline-none min-w-[200px] disabled:border-gray-400"
                  placeholder="type here..."
                />
                <br />but not for{' '}
                <input
                  type="text"
                  value={reflectionText.notFor}
                  onChange={(e) => setReflectionText({ ...reflectionText, notFor: e.target.value })}
                  disabled={reflectionSubmitted}
                  className="border-b-2 border-cyan-500 bg-transparent px-2 py-1 focus:outline-none min-w-[200px] disabled:border-gray-400"
                  placeholder="type here..."
                />
              </p>
            </div>
          </div>

          {feedback && (
            <div className={`p-4 rounded-xl mb-6 ${
              feedback.type === 'success' ? 'bg-green-50 border-2 border-green-300' :
              feedback.type === 'warning' ? 'bg-yellow-50 border-2 border-yellow-300' :
              'bg-blue-50 border-2 border-blue-300'
            }`}>
              <p className="text-lg font-semibold text-gray-800">{feedback.message}</p>
            </div>
          )}

          {!reflectionSubmitted ? (
            <button
              onClick={() => setReflectionSubmitted(true)}
              disabled={!reflectionText.for.trim() || !reflectionText.notFor.trim()}
              className={`w-full py-4 px-6 rounded-xl text-lg font-semibold transition-all ${
                !reflectionText.for.trim() || !reflectionText.notFor.trim()
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white transform hover:scale-105 shadow-md'
              }`}
            >
              Submit Answer
            </button>
          ) : (
            <button
              onClick={() => setScreen('summary')}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-4 px-6 rounded-xl text-lg font-semibold transition-all transform hover:scale-105 shadow-md flex items-center justify-center gap-2"
            >
              Continue <ArrowRight className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    );
  }

  if (screen === 'summary') {
    const scoreData = calculateScore();
    const globalFeedback = getGlobalFeedback();
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6">
        <div className="max-w-2xl w-full bg-white rounded-3xl shadow-lg p-10">
          <div className="text-center mb-8">
            <Award className="w-20 h-20 mx-auto mb-4 text-cyan-600" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What You Learned</h2>
            
            <div className={`inline-block px-8 py-4 rounded-2xl text-xl font-bold mb-4 shadow-md ${
              scoreData.level === 'gold' ? 'bg-gradient-to-r from-yellow-300 to-yellow-400 text-yellow-900' :
              scoreData.level === 'silver' ? 'bg-gradient-to-r from-gray-300 to-gray-400 text-gray-800' :
              'bg-gradient-to-r from-orange-300 to-orange-400 text-orange-900'
            }`}>
              {scoreData.badge}
            </div>
            <p className="text-lg text-gray-600 mb-4">
              You got <strong className="text-gray-900">{scoreData.score} out of {scenarios.length}</strong> correct!
            </p>
            
            {globalFeedback && (
              <div className={`p-4 rounded-xl mb-6 ${
                globalFeedback.includes('⚠️') ? 'bg-yellow-50 border-2 border-yellow-300' :
                'bg-green-50 border-2 border-green-300'
              }`}>
                <p className="text-lg font-semibold text-gray-800">{globalFeedback}</p>
              </div>
            )}
          </div>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3 bg-cyan-50 p-4 rounded-xl">
              <span className="text-xl">✔</span>
              <p className="text-gray-800 font-semibold">AI works on data, not values</p>
            </div>
            <div className="flex items-start gap-3 bg-cyan-50 p-4 rounded-xl">
              <span className="text-xl">✔</span>
              <p className="text-gray-800 font-semibold">AI can be biased</p>
            </div>
            <div className="flex items-start gap-3 bg-cyan-50 p-4 rounded-xl">
              <span className="text-xl">✔</span>
              <p className="text-gray-800 font-semibold">Humans are responsible for AI decisions</p>
            </div>
          </div>

          <button
            onClick={() => setScreen('final')}
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-4 px-6 rounded-xl text-lg transition-all transform hover:scale-105 shadow-md"
          >
            Continue
          </button>
        </div>
      </div>
    );
  }

  if (screen === 'final') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6">
        <div className="max-w-2xl w-full bg-white rounded-3xl shadow-lg p-10 text-center">
          <Brain className="w-20 h-20 mx-auto mb-6 text-cyan-600" />
          <h2 className="text-5xl font-bold text-gray-900 mb-8 leading-tight">
            AI is powerful in the right place — dangerous in the wrong one.
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            You have completed the activity! Remember: AI is a powerful tool, but responsibility always lies with humans.
          </p>
          <div className="bg-cyan-50 p-6 rounded-xl border-2 border-cyan-200">
            <p className="text-gray-700 text-center font-semibold">
              Continue to the next module to learn more about responsible AI use.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
