// functions.cpp
#include "functions.h"
#include <Arduino.h>
#include <Servo.h>
#include <Stepper.h>
#include <NewPing.h>

//draait arm naar begin positie
void naarNull(){

}

bool readRadar(NewPing &radarServo){

}

//een deel van de code komt overeen met draai();
void radar(Stepper &stepperMotor, int steps, NewPing &radarServo){
while(!readRadar(radarServo)){
    draai(stepperMotor, steps);
}
}

//positioneert de servo's in de arm zodat de grijper het object op kan pakken
void posArm(Servo &servoBase, Servo &servoHinge){

}

void oppakken(Servo &servo){

}

//berekend waar het object neergezet moet worden, geeft een waarde die word ingevoerd in de draaifunctie
int  volgendVlak(){

}

//eventueel kan er een andere benaming voor graden worden gebruikt. 
void draai(Stepper &stepperMotor, int steps){

} 

void neerzetten(Servo &servo){

}