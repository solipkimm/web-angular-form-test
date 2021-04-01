import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeComponent } from './employee.component';

describe('EmployeeComponent', () => {
  let component: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeComponent ]
    });
    fixture = TestBed.createComponent(EmployeeComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('fullName()', ()=>{
    it ('should make full name when there are firstName and lastName both ', ()=>{
      component.firstName = "Solip"
      component.lastName = ""
      expect(component.fullName()).toEqual("")

      component.firstName = ""
      component.lastName = "Kim"
      expect(component.fullName()).toEqual("")
    })
    it ('should have a space between first name and last name', ()=>{
      component.firstName = "Solip"
      component.lastName = "Kim"
      expect(component.fullName()).toEqual("Solip Kim")
    })
  })

  describe('email()', ()=>{
    it ('should make email when there are firstName and lastName both', ()=>{
      component.firstName = ""
      component.lastName = "Kim"
      expect(component.email()).toEqual("")

      component.firstName = "Solip"
      component.lastName = ""
      expect(component.email()).toEqual("")
    })
    it ('should ignore any spaces, dashes, or other special characters', ()=>{
      component.firstName = "Seneca"
      component.lastName = "Co 1!23l-lege"
      expect(component.email()).toEqual("scolle@web422.com")
    })
    it ('should return email in lowercase letters', ()=>{
      component.firstName = "SOLIP"
      component.lastName = "KIMKIM"
      expect(component.email()).toEqual("skimki@web422.com")
    })
    it ('should not contain last name more 5 letters', ()=>{
      component.firstName = "John"
      component.lastName = "Doedoedoedoedoe"
      expect(component.email()).toEqual("jdoedo@web422.com")
    })
  })
    
});
