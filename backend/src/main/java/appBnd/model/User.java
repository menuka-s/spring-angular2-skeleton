package appBnd.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="users")
public class User {
    @Id
    @Column(name="user_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name="name")
    private String name;

    @Column(name="is_true")
    private boolean isTrue;

    @Column(name="some_number")
    private int someNumber;

    public int getId(){
        return this.id;
    }

    public String getName(){
        return this.name;
    }

    public void setId(int id){
        this.id = id;
    }

    public void setName(String name){
        this.name = name;
    }

    public boolean getIsTrue(){
        return this.isTrue;
    }

    public void setIsTrue(boolean isTrue){
        this.isTrue = isTrue;
    }

    public int getSomeNumber(){
        return this.someNumber;
    }

    public void setSomeNumber(int someNumber){
        this.someNumber = someNumber;
    }
}
