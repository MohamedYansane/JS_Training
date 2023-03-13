#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <string>
#include <algorithm>
using namespace std;
typedef std::struct Node{
    int data;
    struct Node *next;
    struct Node *prev;
}Node;
Node *head = NULL, *tail , *newnode ;
string message = "";
void createNode();
int lengthOfNode();
void displayNode(string m);
void createNode(){
    int nbNodes;
    cout<<"Enter a number of nodes u wanna insert: ";
    cin>>nbNodes;
    while(nbNode!=0){
        newnode = (Node*)malloc(sizeof(Node));
        newnode->next = NULL;
        newnode->prev = NULL;
        cout<<"Enter a data u wanna insert: ";
        cin>>newnode->data;

        if(head==NULL)
        {
            head = tail = newnode;
        }else{
            tail->next = newnode;
            newnode->prev = temp;
            newnode->next = head;
            tail = newnode;

        }
        nbNodes--;
    }
    
}
void displayNode(string m){
    Node *temp;
    temp = head;
    cout<<"La liste des noeuds "<<m<<" :";
    while(temp->next != tail->next){
        cout<<temp->data<<" ";
        temp = temp->next;
    }
    cout<<temp->data<<endl;
}
void insertAtbegin(){
    string rep;
    if(tail == NULL)
    {
        cout<<"There's no node."<<endl;
        cout<<"Do you wanna create a node (y/n): ";
        cin>>rep;
        if(rep == "y"|| rep == "Y")
        {
            createNode();
        }

    }
    else{
        newnode = (Node*)malloc(sizeof(Node));
        newnode->prev = NULL;
        cout<<"Enter a data u wanna insert: ";
        cin>>newnode->data;
        head->prev = newnode;
        newnode->next = head;
        head = newnode;
    }
    cout<<endl;
    message = "after inserting at the beginning";
    displayNode(message);
}
void insertAtEnd(){
    Node *temp;
    newnode = (Node*)malloc(sizeof(Node));
    cout<<"Enter a data u wanna insert: ";
    cin>>newnode->data;
    newnode->prev = tail;
    newnode->next = tail->next;
    tail->next = newnode;
    tail = newnode;
    cout<<endl;
    message = "after inserting at the end";
    displayNode(message);


}
int lengthOfNode(){
    int cpt = 0;
    Node *temp = tail->next;
    while(temp != tail->next){
        cpt++;
        temp = temp->next;
    }
    if(tail == 0)
        return cpt;
    return cpt+1; ;
}
void insertAtPosition(){
    int position, i = 1;
    cout<<"Enter the position to insert at (started at 1 to "<<lengthOfNode()<<"): ";
    cin>>position;
    if(tail == 0)
    {
        cout<<"There's no node."<<endl;
    }
    else if(position < 1 || position > lengthOfNode)
    {
        cout<<"Invalid position."<<endl;
    }
    else
    {   
        if(position == 1){
            insertAtbegin();
        }
        else if( position == lengthOfNode)
        {
            insertAtEnd();
        }
        else{
            Node *nextNode = tail->next;
            while(i < position){
                nextNode = nextNode->next;
                i++;
            }
            newnode = (Node*)malloc(sizeof(Node));
            cout<<"Enter a data u wanna insert at ur position given: ";
            cin>>newnode->data;
            nexttNode->prev->next = newnode;
            newnode->prev = nexttNode->prev;
            newnode->next = nexttNode;
            nextnode->prev = newnode;

        }
    }
    cout<<endl;
    message = "after inserting at the given position";
    displayNode(message);    
}
void deleteAtBeginning(){
    Node *temp = tail->next;
    temp->next->prev = NULL;
    head = temp->next;
    tail->next = head;
    free(temp);
    message = "after deleting at the beginning";
    displayNode(message);
}
void deleteAtEnd(){
    Node *temp = tail;
    tail->prev->next = head;
    tail = tail->prev;
    free(temp);
    message = "after deleting at the end";
    displayNode(message);

}
void deleteAtPosition(){
    int position;
    cout<<"Enter the position u wanna delete: ";
    cin>>position;
    if(tail == 0)
    {
        cout<<"There's no node."<<endl;
    }
    else if(position < 1 || position < lengthOfNode())
    {
        cout<<"Invalid position. It must start between 0 and "<<lengthOfNode()<<endl;
    }
    else{
        if(position == 1)
        {
                deleteAtBeginning();
        }
        else if(position == lengthOfNode())
        {
            deleteAtEnd();
        }
        else{
            int i = 1;
            Node *temp = tail->next;
            while(i < position)
            {
                temp = temp->next;
                ++i;
            }
            temp->next->prev = temp->prev;
            temp->prev->next = temp->next;
            free(temp);
        }
    }
    message = "after deleting at the given position";
    displayNode(message);
}
void menu(){
    string rep;
    int choice;
    do{
        cout<<"1- Create a node\n2- Insert at the beginning\n3- Insert at the end\n4- Insert at a specific position\n5- Delete at the beginning\n6- Delete at the end\n7- Delete a node\nEnter your choice: ";
        cin>>choice;
        switch(choice){
            case 1:
                createNode();
                break;
            case 2:
                insertAtbegin();
                break;
            case 3:
                insertAtEnd();
                break;
            case 4:
                insertAtPosition();
                break;
            case 5:
                deleteAtBeginning();
                break;
            case 6:
                deleteAtEnd();
                break;
            case 7:
                deleteAtPosition();
                break;
            default:
                break;
        }
        cout<<"Do u wanna continue (y/n): ";
        cin>>rep;
        
    }while(rep == "y" || rep == "Y");

}

int main(int argc, char c){
    menu();
    return 0;
}