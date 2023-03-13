#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <string>
#include <algorithm>
using namespace std;
typedef struct Node {
    int data;
    struct Node *next;
}Node;
Node *head=NULL, *temp, *newnode, *tail;
void insertNode();
int lengthOfNode();
void displayNode();
void display();
void deleteAtbegin();
void deleteAtEnd();
void deleteAtPosition();
void reverse();
void menu();

void insertNode(){
    int nbNode;
    cout<<"Enter a number of node u wanna insert: ";
    cin>>nbNode;
    while(nbNode!=0){
        newnode = (Node*)malloc(sizeof(Node));
        newnode->next = 0;
        cout<<"Enter a data u wanna insert: ";
        cin>>newnode->data;
        if(head==0){
            head = tail = newnode;
        }
        else{
            tail->next = newnode;
            tail = newnode;
        }
        tail->next = head;
        nbNode--;
    }
}
void insertAtbeg(){
    Node *tmp = tail;
    newnode = (Node*)malloc(sizeof(Node));
    cout<<"Enter a data u wanna insert at the beginning of the Linked lists: ";
    cin>>newnode->data;
    newnode->next = head;
    head = newnode;
    tmp->next = head;
    cout<<endl;
    display();

}
void insertAtEnd(){
    newnode = (Node*)malloc(sizeof(Node));
    cout<<"Enter a data u wanna insert at the end of the Linked lists: ";
    cin>>newnode->data;
    tail->next = newnode;
    newnode->next = head;
    tail = newnode;
    cout<<endl;
    display();
}
int lengthOfNode(){
    int cpt = 1;
    temp = head;
    while(temp->next != head)
    {
        cpt+=1;
        temp = temp->next;
    }
    return cpt;
}
void insertAtPos(){
    int position , i = 1;
    cout<<"Enter a position to insert at: ";
    cin>>position;
    if(position < 1 || position > lengthOfNode())
        cout<<"Invalid position it must be between 1 and "<<lengthOfNode();
    else {
        if(position == 1)
            insertAtbeg();
        else if( position == lengthOfNode())
            insertAtEnd();
        else{
            Node *tmp = head , *prev;
            while(i < position)
            {
                prev = tmp;
                tmp = tmp->next;
                i++;
            }
            newnode = (Node*)malloc(sizeof(Node));
            cout<<"Enter a data u wanna insert in the Linked lists at position"<<position<<": ";
            cin>>newnode->data;
            prev->next = newnode;
            newnode->next = tmp;
        }
    }
    cout<<endl;
    display();
}
void displayNode(){
    int i = 1;
    Node *tail = head;
    cout<<"La liste des noeuds: ";
    while(i <= lengthOfNode()){
        cout<<tail->data<< " ";
        tail = tail->next;
        i++;
    }
    cout<<endl;
}
void display(){
    if(head == NULL)
    {
        cout<<"There's no node."<<endl;
    }
    else
    {
        temp = head;
        while(temp->next != head)
        {
            cout<<temp->data<<" ";
            temp = temp->next;
        }
        cout<<temp->data;
        
    }
    cout<<endl;

}

void deleteAtbegin(){
    // quand je fais temp = head je pourrai supprimer at beginning mais
    // le probleme est que tail ->next pointe vers le debut comme c'est CLL
    temp = tail->next;
    if(tail->next == 0)
    {
        cout<<"the list is empty"<<endl;
    }
    else if(temp == tail)
    {
        // au cas ou il n'y aura qu'un seul noeud
        tail = 0;
        head = 0;
        free(temp);
    }else{
        tail->next = temp->next;
        head = head->next;
        free(temp);
        
    }
    display();
    cout<<"the new value of head is: "<<head->data<<endl;
    
}
void deleteAtEnd(){
    temp = tail;
    if(tail == NULL)
    {
        cout<<"there's no node"<<endl;
    }
    else if(tail == tail->next){
        tail = 0;
        free(temp);
    }
    else{
        Node *tmp = head, *previous;
        while (tmp->next != tail->next){
            previous = tmp;
            tmp = tmp->next;
        }
        /* we can use those three steps to
        * previous->next = tail->next
        * previous = tail;
        * free(tmp);
        * or we can use the below steps
        */
        tail = previous;
        tail->next = head;
        free(tmp);
        

    }
    display();
}
void deleteAtPosition(){
    int position , i = 1;
    cout<<"Enter the position: ";
    cin>>position;
    if(position > lengthOfNode() || position < 1)
    {
        cout<<"Invalid position. It must be between 1 and "<<lengthOfNode()<<"."<<endl;
    }else if(tail == NULL)
    {
        cout<<"There's no node."<<endl;
    }
    else{
        if(position == 1)
        {
            deleteAtbegin();
        }else if(position == lengthOfNode())
        {
            deleteAtEnd();
        }
        else{
            Node *nextNode = tail->next , *previous;
            while(i < position)
            {
                previous = nextNode;
                nextNode = nextNode->next;
                i++;
            }
            previous->next = nextNode->next;
            free(nextNode);
            
        }
        display();

    }
   
}
void reverse(){
    Node *temp = head->next, *previous;
    while(i < lengthOfNode())
    {
        prev = temp;
        temp
    }

    
}
void menu(){
    
    int choice;
    string rep;
    
    do{
        cout<<"1- Create a node\n2- Insert at beginning\n3- Insert at the end\n4- Insert at a specific position\n";
        cout<<"5- Delete at beginning\n6- Delete at the end\n7- Delete at a specific position\n8- Reverse\n";
        cout<<"Enter your choice: ";
        cin>>choice;
        switch(choice)
        {
            case 1:
                insertNode();
                break;
            case 2:
                insertAtbeg();
                break;
            case 3:
                insertAtEnd();
                break;
            case 4:
                insertAtPos();
                break;
            case 5:
                deleteAtbegin();
                
                break;
            case 6:
                deleteAtEnd();
                
                break;
            case 7:
                deleteAtPosition();
                break;
            case 8:
                reverse();
                break;
            default:
                break;
                
           
            
        } 
        cout<<"do u wanna continue (y/n): ";
        cin>>rep;
        

    }while(rep == "y" || rep == "Y");
    
  
}

int main(){
    
    //cout<<"lengthOfNode: "<<lengthOfNode()<<endl;
    //cout<<"The data at tail adress: "<<tail->data<<endl;
    //il doit me retourner le 10
    menu();
    
    
    return 0;
}