from flask import Flask, request, jsonify
import pandas as pd
import joblib
from sklearn.preprocessing import MinMaxScaler
import numpy as np

app = Flask(__name__)

model_filename = 'model.joblib'
loaded_model = joblib.load(model_filename)

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json(force=True)

        user_input = {
            'religion': data.get('religion', 'NOT SPECIFIED'),
            'marital_status': data.get('marital_status', 'SINGLE'),
            'ethnicity': data.get('ethnicity', 'UNKNOWN/NOT SPECIFIED'),
            'emergency_time': float(data.get('emergency_time', 0.0)),
            'gender': data.get('gender', 'M'),
            'age': int(data.get('age', 0))
        }

        user_df = pd.DataFrame([user_input])

        scaler = MinMaxScaler()
        user_df['emergency_time'] = scaler.fit_transform(user_df[['emergency_time']])
        user_df['age'] = scaler.fit_transform(user_df[['age']])

        user_df = pd.get_dummies(
            user_df, columns=['religion', 'marital_status', 'ethnicity', 'gender'])

        required_columns = ['emergency_time', 'age', 'religion_BUDDHIST',
                            'religion_CATHOLIC', 'religion_EPISCOPALIAN', 'religion_GREEK ORTHODOX',
                            'religion_JEWISH', 'religion_NOT SPECIFIED', 'religion_OTHER',
                            'religion_PROTESTANT QUAKER', 'religion_UNOBTAINABLE',
                            'marital_status_DIVORCED', 'marital_status_MARRIED',
                            'marital_status_SINGLE', 'marital_status_WIDOWED', 'ethnicity_ASIAN',
                            'ethnicity_ASIAN - CHINESE', 'ethnicity_BLACK/AFRICAN AMERICAN',
                            'ethnicity_HISPANIC OR LATINO', 'ethnicity_UNABLE TO OBTAIN',
                            'ethnicity_UNKNOWN/NOT SPECIFIED', 'ethnicity_WHITE', 'gender_F',
                            'gender_M']

        for col in required_columns:
            if col not in user_df.columns:
                user_df[col] = False

        user_df = user_df[required_columns]

        sample_input = user_df.iloc[0].values.reshape(1, -1)

        prediction = loaded_model.predict(sample_input)

        prediction_value = prediction[0].item()

        return jsonify({'prediction': prediction_value})

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
