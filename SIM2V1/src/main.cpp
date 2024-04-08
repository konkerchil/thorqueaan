#include <Arduino.h>
#include <Servo.h>
#include <Stepper.h>
#include <NewPing.h>
#include <functions.h>

//hardware declaratie     hier moet de pinout nog aan toegevoegd worden
int baseServo;            //de onderste servo die vast zit aan de draaiplaat
int hingeServo;           //de tweede schanier in de arm
int grijpServo;           //servo die in de grijper is gemonteerd en zorgt dat deze opent en sluit
int radarSensor;          //ultrasonic sensor die vast zit aan de base en het object waarneemt
int kleurVlak;            //infrarood sensor die kijkt of de grijper boven het juiste vlak hangt. hier is geen library voor nodig.
int draaiMotor;           //steppermotor die aan de base in gemonteerd en zorgt dat deze draait

void setup() {

}

void loop() {
  
}
