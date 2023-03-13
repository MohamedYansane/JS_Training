#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;
typedef struct Node{
    int data;
    struct Node *next;

}Node;
Node *head = NULL, *newnode, *temp;
int cpt = 0;
void display();
void insertNode(){
    int numberOfNodes ;
    cout<<"Enter a number of nodes u wanna insert: ";
    cin>>numberOfNodes;
    while(numberOfNodes != 0){
        newnode = (Node*)malloc(sizeof(Node));
        newnode->next = 0;
        cout<<"Enter a data you wanna insert: ";
        cin>>newnode->data;
        if(head == NULL)
        {
            head = temp = newnode; // je rattache le noeud a la racine
        }
        else{
            temp->next = newnode;
            temp = newnode;
        }
        numberOfNodes--;
    }
    cout<<endl;
}

void insertAtBeginning(){
    temp = head;
    newnode = (Node*)malloc(sizeof(Node));
    cout<<"Enter a node you wanna insert at the beginning: ";
    cin>>newnode->data;
    newnode->next = temp;
    head = newnode;
}
void insertAtTheEnd(){
    temp = head;
    newnode = (Node*)malloc(sizeof(Node));
    cout<<"Enter a node you wanna insert at the end: ";
    cin>>newnode->data;
    newnode->next = 0;
    while(temp->next != 0)
    {
        temp = temp->next;
    }
    temp->next = newnode;


}

 void display(){
    temp = head;
    cout<<"La liste des noeuds: ";
    while(temp != 0)
    {
        cout<<temp->data<<" ";
        temp = temp->next;
        cpt+=1; // it will represent the length of the node
    }
}
void insertAtPosition()
{
    int i = 1, position; 
    Node *prev;
    temp = head;
    cout<<"Enter the position of the node: ";
    cin>>position;
    if(position <0 || position > cpt)
    {
        //cpt represent the length of my node
        cout<<"Error: position must be between 0 and "<<cpt;
    }
    else{
        while (i < position)
        {
            prev = temp;
            temp = temp->next;
            ++i;
        }
        newnode = (Node*)malloc(sizeof(Node));
        cout<<"Enter  a data you wanna insert: ";
        cin>>newnode->data;
        newnode->next = temp;
        prev->next = newnode;
    }
    cout<<endl;
    cout<<"After inserting here's the new node: ";
    display();
}
void deleteFromBeginingNode(){
    temp = head;
    head = temp->next;
    free(temp);


}
void deleteAtEnd(){
    Node *prev;
    temp = head;
    while(temp->next != 0)
    {
        prev = temp;
        temp = temp->next;
    }
    prev->next = 0;
    free(temp);
    display();
}
void deleteAtPosition()
{
    Node *prev;
    temp = head;
    int position, i = 1;
    cout<<"Enter the position: ";
    cin>>position;
    if(position < 0 || position > cpt)
    {
        cout<<"Invalid position";
    }
    else{
        while(i < position)
        {

            prev = temp;
            temp = temp->next;
            i++;
        }
        prev->next = temp->next;
        free(temp);
        display();
    }
}
// it's time to pray
int main(){
    return 0;
}