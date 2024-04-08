// functions.h

#ifndef FUNCTIONS_H
#define FUNCTIONS_H

#include <Servo.h>
#include <Stepper.h>
#include <NewPing.h>

//functie declaratie
void naarNull();                                                     //draait arm naar begin positie. gebruik draai() hiervoor en voer benodigde stappen in
bool readRadar(NewPing &radarServo);                                 //returns true when object is detected
void radar(Stepper &stepperMotor, int steps, NewPing &radarServo);   //een deel van de code komt overeen met draai();
void posArm(Servo &servoBase, Servo &servoHinge);                    //positioneert de servo's in de arm zodat de grijper het object op kan pakken
void oppakken(Servo &servo);  
int  volgendVlak();                                                  //berekend waar het object neergezet moet worden, geeft een waarde die word ingevoerd in de draaifunctie
void draai(Stepper &stepperMotor, int steps);                        //eventueel kan er een andere benaming voor graden worden gebruikt. 
void neerzetten(Servo &servo);

#endif