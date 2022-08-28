export const questionRequest = {
  'type': 'local_practice',
  'state': 'initial',
  'questions': [
    {
      'response_id': '60005',
      'type': 'association',
      'stimulus': 'Match the cities to the parent nation.',
      'stimulus_list': ['London', 'Dublin', 'Paris', 'Sydney'],
      'possible_responses': ['Australia', 'France', 'Ireland', 'England'],
      'validation': {
        'score': 1,
        'value': ['England', 'Ireland', 'France', 'Australia']
      }
    }
  ]
};

export const dataRequest = {
  references: ["619935",
    "10082a84-0a72-45bf-b465-e9e54b6094bc",
    "6656ffc0-2cad-4cf0-884f-946cbb9a4bad"]
};

export const dataScoreRequest = {
  "questions": [
    {
      "response_id": "385",
      "options": ["True", "False"],
      "stems": ["Washington is the capital of United States", "Sydney is the capital of Australia", "Beijing is the capital of China", "Singapore is in China"],
      "stimulus": "Select True or False for the following",
      "type": "choicematrix",
      "ui_style": {
        "type": "table"
      },
      "validation": {
        "scoring_type": "exactMatch",
        "valid_response": {
          "score": 1,
          "value": [0, 1, 0, 1]
        }
      }
    },
    {
      "response_id": "386",
      "options": ["True", "False"],
      "stems": ["Palaviya is in india", "Singapore is in China"],
      "stimulus": "Select True or False for the following",
      "type": "choicematrix",
      "ui_style": {
        "type": "table"
      },
      "validation": {
        "scoring_type": "exactMatch",
        "valid_response": {
          "score": 1,
          "value": [0, 0]
        }
      }
    },
    {
      "response_id": "387",
      "options": [{
        "label": "Kandy",
        "value": "0"
      }, {
        "label": "Sri Jayawardanapura",
        "value": "1"
      }, {
        "label": "Colombo",
        "value": "2"
      }, {
        "label": "Galle",
        "value": "3"
      }],
      "stimulus": "What is the name of capital city in Sri Lanka?",
      "type": "mcq",
      "validation": {
        "scoring_type": "exactMatch",
        "valid_response": {
          "score": 1,
          "value": ["1"]
        }
      },
      "ui_style": {
        "type": "horizontal"
      }
    }
  ],
  "responses": {
    "385": {
      "value": [0, 1, 0, 1],
      "type": "array"
    },
    "386": {
      "value": [1, 0],
      "type": "array"
    },
    "387": {
      "value": ["1"],
      "type": "array"
    }
  }
};
