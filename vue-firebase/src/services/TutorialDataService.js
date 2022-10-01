/**
    * @description      : 
    * @author           : ספיר
    * @group            : 
    * @created          : 24/09/2022 - 18:08:14
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 24/09/2022
    * - Author          : ספיר
    * - Modification    : 
**/
import firebase from "../main";

const tutorialsDB = firebase.collection("/tutorials");

class TutorialDataService {
  getAll() {
    return tutorialsDB;
  }

  create(tutorial) {
    return tutorialsDB.add(tutorial);
  }

  update(id, value) {
    return tutorialsDB.doc(id).update(value);
  }

  delete(id) {
    return tutorialsDB.doc(id).delete();
  }
}

export default new TutorialDataService();
