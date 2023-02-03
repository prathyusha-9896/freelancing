package com.registration.registration.service;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.registration.registration.model.registrations;
import com.registration.registration.repository.registrationsrepository;
@Service
public class registrationserviceimpl implements RegistrationService{
    @Autowired
    private registrationsrepository registrationrepository;

    public String createregistration(registrations registration){
        registrationrepository.save(registration);
        return "success";
    }
    public registrations getregistrationById(Integer id){
        Optional<registrations> findById=registrationrepository.findById(id);
        if(findById.isPresent()){
            return findById.get();
        }
    
        return null;
    }
    public Iterable<registrations> getAllregistrations(){
        return registrationrepository.findAll();
        
    }
    public registrations updateregistrationById(Integer id, registrations registration){
        Optional<registrations> registrationToUpdateOptional=registrationrepository.findById(id);
        if (!registrationToUpdateOptional.isPresent()) {
            return null;
          }
         
          
          registrations registrationToUpdate = registrationToUpdateOptional.get();
         
          if (registration.getName() != null) {
            registrationToUpdate.setName(registration.getName());
          }
          if (registration.getPhonenumber() != null) {
            registrationToUpdate.setPhonenumber(registration.getPhonenumber());
          }
          if (registration.getMail() != null) {
            registrationToUpdate.setMail(registration.getMail());
          }
          if (registration.getPassword() != null) {
            registrationToUpdate.setPassword(registration.getPassword());
          }
          if (registration.getFeedback() != null) {
            registrationToUpdate.setFeedback(registration.getFeedback());
          }
          registrations updatedsregistrations = registrationrepository.save(registrationToUpdate);
          return updatedsregistrations;
        }
        public registrations deleteregistrationById(Integer id) {
            Optional<registrations> registrationsToDeleteOptional = registrationrepository.findById(id);
            if (!registrationsToDeleteOptional.isPresent()) {
              return null;
            }
            registrations registrationToDelete = registrationsToDeleteOptional.get();
            registrationrepository.delete(registrationToDelete);
            return registrationToDelete;
          }
    }