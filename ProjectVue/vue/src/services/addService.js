import http from "../http-common";

class addService {
    create(data) {
        return http.post("/student/insert", data);
    }    
        
    getAll(){
        return http.get("/student/getAll");
    }
   
  deleteStudent(id) {
    return http.delete(`/student/delete/${id}`);
  }

  getStudentById(id) {
    return http.get(`/student/getById/${id}`);
  }

  updateStudent(id, data) {
    return http.put(`/student/update/${id}`, data)  
  }
}

export default new addService();