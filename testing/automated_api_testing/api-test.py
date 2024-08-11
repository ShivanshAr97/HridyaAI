import requests
import json

url = 'https://hridyaai.onrender.com/predict'

with open('test_cases.json', 'r') as file:
    test_cases = json.load(file)['test_cases']

with open('correct_responses.json', 'r') as file:
    correct_responses = json.load(file)

test_results = {}

for test_case in test_cases:
    response = requests.post(url, json=test_case['data'])
    actual_output = response.json()
    expected_output = correct_responses[test_case['name']]['expected_output']
    
    if actual_output == expected_output:
        test_results[test_case['name']] = "Accepted"
    else:
        test_results[test_case['name']] = {
            "Result": "Failed",
            "Expected": expected_output,
            "Actual": actual_output
        }

with open('test_results.json', 'w') as file:
    json.dump(test_results, file, indent=4)

print("Test results saved to test_results.json")
