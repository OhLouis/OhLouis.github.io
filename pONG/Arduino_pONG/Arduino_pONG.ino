  int buttonValue = 1;
  int buttonValue0 = 0;

void setup() {
  // initialize serial communication at 9600 bits per second:
  Serial.begin(9600);

  pinMode(11, INPUT);
  pinMode(12, INPUT);
}

// the loop routine runs over and over again forever:
void loop() {
  // read the input on analog pin 0:
  int sensorValue = analogRead(A5);
  int sensorValue0 = analogRead(A0);
  buttonValue = digitalRead(12);
  buttonValue0 = digitalRead(11);
  
  // print out the value you read:
  Serial.print(sensorValue);
  Serial.print("&");
  Serial.print(sensorValue0);
  Serial.print("&");
  Serial.print(buttonValue);
  Serial.print("&");
  Serial.println(buttonValue0);
  delay(1);        // delay in between reads for stability
}
