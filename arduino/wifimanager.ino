#include <WiFiManager.h>
  
void setup() {
  
    Serial.begin(115200);
    WiFiManager manager;
    manager.setDebugOutput(false);
    manager.resetSettings();

    
    WiFiManagerParameter parameter("parameterId", "Unique Token", "default value", 40);
    manager.addParameter(&parameter);
     
    manager.autoConnect("ESP32_AP");

     if(manager.autoConnect("AutoConnectAP")){
        Serial.println("connected...yeey :)");
        Serial.println("Parameter:");
        Serial.println(parameter.getValue());
//        Serial.println("SSID:");
//        Serial.println((const char*)ssid);
//        Serial.println("password:");
//        Serial.println((const char*)password);
    }
    else {
        Serial.println("Configportal running");
    }

}
 
void loop(){}



//#include <WiFiManager.h> // https://github.com/tzapu/WiFiManager
//WiFiManager wm;
//
//void setup() {
//    WiFi.mode(WIFI_STA); // explicitly set mode, esp defaults to STA+AP    
//    // put your setup code here, to run once:
//    Serial.begin(115200);
//    
//    //reset settings - wipe credentials for testing
//    wm.resetSettings();
//
//    wm.setConfigPortalBlocking(false);
//
//    WiFiManagerParameter parameter("parameterId", "Parameter Label", "default value", 40);
//    wm.addParameter(&parameter);
//
//    //automatically connect using saved credentials if they exist
//    //If connection fails it starts an access point with the specified name
//    if(wm.autoConnect("AutoConnectAP")){
//        Serial.println("connected...yeey :)");
//    }
//    else {
//        Serial.println("Configportal running");
//    }
//}
//
//void loop() {
//    wm.process();
//    // put your main code here, to run repeatedly:
//}



//#include <WiFi.h>
//#include <WiFiServer.h>
//#include <AutoConnect.h>
//
//void deleteAllCredentials(void) {
//  AutoConnectCredential credential;
//  station_config_t config;
//  uint8_t ent = credential.entries();
//
//  Serial.println("AutoConnectCredential deleting");
//  if (ent)
//    Serial.printf("Available %d entries.\n", ent);
//  else {
//    Serial.println("No credentials saved.");
//    return;
//  }
//
//  while (ent--) {
//    credential.load((int8_t)0, &config);
//    if (credential.del((const char*)&config.ssid[0]))
//      Serial.printf("%s deleted.\n", (const char*)config.ssid);
//    else
//      Serial.printf("%s failed to delete.\n", (const char*)config.ssid);
//  }
//}
//
//void setup() {
//  delay(1000);
//  Serial.begin(115200);
//  Serial.println();
//  deleteAllCredentials();
//}
//
//void loop() {
//}
