import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Icons for expand/collapse

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      question: "מה כולל הליווי?",
      answer: "הליווי שלי כולל נסיעה משותפת שבה אני מתמקד בלמידה של סיטואציות אמיתיות כמו מחלפים, כיכרות מרובות נתיבים, כבישים מהירים, מעברי נתיבים, רמזורים, חניה באזורים עמוסים ועוד. המטרה היא לעזור לנהגים להרגיש בטוחים ושולטים בכביש!",
    },
    {
      question: "כמה זמן נמשך הליווי?",
      answer: "זה מאוד תלוי בצרכים ובקצב של כל נהג. יש כאלה שמרגישים בטוחים אחרי מספר פגישות, ויש כאלה שמעדיפים תהליך ארוך יותר. אפשר לקבוע שיחת ייעוץ קצרה ולהחליט יחד על התוכנית שמתאימה לך.",
    },
    {
      question: "אני כבר כמה שנים עם רישיון, אבל לא נוהג/ת. זה מתאים לי?",
      answer: "בהחלט! השירות מתאים גם למי שיש להם רישיון וסיימו את תקופת הליווי הנדרשת בחוק אבל מרגישים חוסר ביטחון או רוצים לחזור לנהוג אחרי תקופה ארוכה שלא נהגו. אני עובד לפי הקצב שלך ועוזר לך לחזור לכביש עם ביטחון.",
    },
    {
      question: "באיזה רכב מתקיים הליווי?",
      answer: "הליווי מתקיים ברכב של מורה נהיגה, סיטרואן C5 עם דוושות גם למלווה למקרה הצורך.",
    },
    {
      question: "כמה זה עולה?",
      answer: ".המחיר הוא 155 ש'ח לפגישה, מספר הפגישות והתדירות שלהן אישי עבור כל נהג",
    },
    {
      question: "איך מתאמים פגישה?",
      answer: "יש קישור לשירות תיאום ליווי און-ליין, ניתן לכתוב מייל ואחזור אליכם ותמיד ניתן לחייג או לכתוב לי וואטספ.",
    },
    {
      question: "האם אתה מורה נהיגה?",
      answer: "אני לא מורה נהיגה, אלא מלווה מנוסה שמתמחה בהכנה לסיטואציות אמיתיות בכביש. השירות מיועד לנהגים עם רישיון שרוצים לחזק את הביטחון והמיומנויות שלהם.",
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section style={{ padding: '20px', direction: 'rtl' }}>
      <h2 style={{ textAlign: 'center' }}>שאלות ותשובות</h2>
      {questions.map((q, index) => (
        <div
          key={index}
          style={{ marginBottom: '15px', cursor: 'pointer' }}
          onClick={() => toggleAnswer(index)}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#f4f4f4',
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ddd',
            }}
          >
            <p style={{ margin: 0, fontWeight: 'bold' }}>{q.question}</p>
            {activeIndex === index ? (
              <FaChevronUp style={{ transition: 'transform 0.3s ease' }} />
            ) : (
              <FaChevronDown style={{ transition: 'transform 0.3s ease' }} />
            )}
          </div>
          {activeIndex === index && (
            <p
              style={{
                marginTop: '10px',
                backgroundColor: '#fff',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ddd',
              }}
            >
              {q.answer}
            </p>
          )}
        </div>
      ))}
    </section>
  );
};

export default FAQ;
