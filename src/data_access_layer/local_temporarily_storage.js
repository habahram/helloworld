//Later in the course we will replace this transient storage with a communication channel which will send the data to the back-end to be saved in a permanment storage.
import flowers from '../temp_data_repository/flowers';
import data from '../temp_data_repository/data';
let dataService = {
      customers: [],
      getFlowers: () => {
            return flowers;
      },
      getQuiz: (name) => {
          let quiz = data.find(x => x.name.toLowerCase() === name.toLowerCase());
          return quiz;
      }
}

export default dataService;