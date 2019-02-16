Survey
    .StylesManager
    .applyTheme("default");

var json = {
    pages: [
      {
        questions: [
        {
            // question 1
            type: "radiogroup",
            name: "question1",
            title: "When do you usually start doing hw?",
            isRequired: true,
            colCount: 1,
            choices: [
                "As soon as it is released",
                "After hw party",
                "Right before due date"
          ]
        },
        {
            // question 2
            type: "radiogroup",
            name: "question2",
            title: "How much do you want a study group?",
            isRequired: true,
            colCount: 1,
            choices: [
                "Frequently study together even if there is no hw",
                "Only before exams or due dates"
        ]
      },
      {
            // question 3
            type: "radiogroup",
            name: "question3",
            title: "Attitudes towards extra work/ competition for extra credit?",
            isRequired: true,
            colCount: 1,
            choices: [
                "I do not usually do extra credit",
                "I will do it only if I need that extra credit",
                "I will always try my best"
              ]
            }
          ]
        },
      {
        questions: [
        {
            // question 4
            type: "radiogroup",
            name: "question4",
            title: "Do you prefer finishing hw in one time or separating tasks into several days?",
            isRequired: true,
            colCount: 1,
            choices: [
                "Pull an all-nighter",
                "Separate tasks into several days"
              ]
        },
        {
            // question 5
            type: "radiogroup",
            name: "question5",
            title: "Do you prefer study groups at Weekends or weekdays?",
            isRequired: true,
            colCount: 1,
            choices: [
                "Weekends",
                "Weekdays"
              ]
          },
          {
            // question 6
            type: "radiogroup",
            name: "question6",
            title: "What is your preferred time for study groups?",
            isRequired: true,
            colCount: 1,
            choices: [
                "Daytime without classes",
                "Weekday nights",
                "Weekends"
              ]
            }
          ]
        },
      {
        questions: [
        {
            // question 7
            type: "radiogroup",
            name: "question7",
            title: "Are you willing to share lecture notes with your study group?",
            isRequired: true,
            colCount: 1,
            choices: [
                "I seldom take notes",
                "I am willing to share notes even if others have nothing for me",
                "I am willing to share notes if others also share their notes",
                "I do not want to share"
              ]
          },
          {
            // question 8
            type: "radiogroup",
            name: "question8",
            title: "Do you go to discussions?",
            isRequired: true,
            colCount: 1,
            choices: [
                "All",
                "Frequently",
                "never"
              ]
          },
          {
            // question 9
            type: "radiogroup",
            name: "question9",
            title: "Do you go to Office Hours",
            isRequired: true,
            colCount: 1,
            choices: [
                "Frequently study together even if there is no hw",
                "Only before exams or due dates",
                "Never"

              ]
            }
          ]
        }
      ]
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            .innerHTML = "result: " + JSON.stringify(result.data);
    });

$("#surveyElement").Survey({model: survey});
