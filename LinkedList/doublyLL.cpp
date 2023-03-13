/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, PHP, Ruby, 
C#, OCaml, VB, Perl, Swift, Prolog, Javascript, Pascal, HTML, CSS, JS
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <string>
#include <algorithm>
using namespace std;
void displayForwards();
void displayBackwards();
void menu();
int lengthofNode();
void deleteAtEnd();
void deleteAtEndBestComplexity();
void deleteAtPos();

typedef struct Node {
    int data;
    struct Node *next;
    struct Node *prev;
}Node;

Node *head = NULL, *temp, *tail, *prevTemp, *newnode;
int cpt = 0;
void insertNode()
{
    int numberOfNodes;
    cout<<"Enter a number of nodes you wanna insert: ";
    cin>>numberOfNodes;
    while(numberOfNodes!=0) {
        newnode = (Node*)malloc(sizeof(Node));
        newnode->prev = NULL;
        newnode->next = NULL;
        cout<<"Enter a data you want to insert: ";
        cin>>newnode->data;
       if(head==NULL)
       {
            head = tail = newnode;
       }
       else
       {
            tail->next = newnode;
            newnode->prev = tail;
            tail = newnode;
       }
       numberOfNodes--;
       

    }
    prevTemp = tail;
    cout<<endl;
    displayForwards();
    displayBackwards();
}
void displayForwards () {
    temp = head;
    cout<<"La liste des noeuds en forwards: ";
    while(temp != 0) {
        cout<<temp->data<<" ";
        temp = temp->next;
    }
    cout<<endl;
}
void insertAtbeginning(){
    temp = head;
    newnode = (Node *)malloc(sizeof(Node));
    newnode->prev = NULL;
  
    cout<<"Enter a data you wanna insert at the beginning: ";
    cin>>newnode->data;
    head->prev = newnode;
    newnode->next = head;
    head = newnode;
    displayForwards();
}
// worst time complexity 0(n) cause we're traversing 
void insertAtEnd() {
    temp = head;
    while(temp->next != NULL) {
        temp = temp->next;
    }
    newnode = (Node *)malloc(sizeof(Node));
    cout<<"Enter a data you wanna insert at the end: ";
    cin>>newnode->data;
    temp->next = newnode;
    newnode->prev = temp;
    newnode->next = NULL;
    cout<<endl;
    displayForwards();


}
// using the best time complexity
void insertAtEndBestComplexity()
{
    temp = tail;
    newnode = (Node *)malloc(sizeof(Node));
    newnode->next = NULL;
    cout<<"best complexity"<<endl;
    cout<<"Enter a data you wanna insert: ";
    cin>>newnode->data;
    tail->next = newnode;
    newnode->prev = tail;
    tail = newnode;
    cout<<endl;
    displayForwards();
  

}

void insertAtPos(){
    int compteur =lengthofNode();
    int i = 1, pos;
    Node *previous;
    cout<<"The value of cpt and compteur: "<<cpt<<" "<<compteur<<endl;
    cout<<"Enter a position you want to insert at: ";
    cin>>pos;
    if(compteur == 0)
    {
        cout<<"Sorry there's no node u have to create a node first."<<endl;
        string rep;
        cout<<"Do u wanna create a node (y/n): ";
        cin>>rep;
        if(rep =="y"|| rep =="Y")
            menu();
    }
    if(pos < 0 && pos > compteur)
    {
        cout<<"Error: Invalid position. It must be between 0 and "<<compteur<<endl;

    }
    else{
            if(pos == 1)
            {
                insertAtbeginning();
            }
            else if(pos == cpt)
            {
                insertAtEndBestComplexity();
            }
            else{
                temp = head;
                while( i < pos) 
                { 
                    previous = temp;
                    temp = temp->next;
                    i++;
                }
                newnode = (Node *)malloc(sizeof(Node));
                cout<<"Enter a data you wanna insert at pos = "<<pos<<": ";
                cin>>newnode->data;
                newnode->next = temp;
                temp->prev = newnode;
                previous->next = newnode;
                newnode->prev = previous;
        
                }
        
        
        }
        cout<<"After insertion at pos = "<<pos<<"this is a new nodes"<<endl;
        displayForwards();
       

}
void reverse(){
    cout<<"La liste des noeuds en backwards: ";
    while(tail != 0) {
        cout<<tail->data<<" ";
        tail = tail->prev;
    }
    cout<<endl;
}
void displayBackwards () {
    cout<<"La liste des noeuds en backwards: ";
    while(prevTemp != 0) {
        cout<<prevTemp->data<<" ";
        prevTemp = prevTemp->prev;
    }
    cout<<endl;
}
int lengthofNode() {
    int compteur = 0;
    temp = head;
    while(temp != 0) {
        compteur++;
        cpt++;
        temp = temp->next;
    }
    //cout<<"The length of the node: "<<compteur<<endl;
    return compteur;

}
void deleteFromBeg()
{
    Node *tmp ,*root;
    int nbNode;
    tmp = root = head;
    nbNode = lengthofNode();
    if(head == NULL)
    {
        cout<<"There's is no node."<<endl;
    }
    else if(tmp == head && nbNode == 1)
    {
     
        //j'ai cree le root juste pour le cas ou il 
        //y'aurait un noeud apres  mon tmp et soit NULL
        // il kept le head d'auparavant pour afin liberer l'adresse memoire
        head = tmp = NULL;
        free(root);
    }
    else
    {
        head = head->next;
        head->prev = NULL;
        free(tmp);
    }
  
    cout<<"after deletion at beginning"<<endl;
    displayForwards();
    
    
   
    //cout<<"After deletion at the beginning of the node ";
    //displayForwards();
}
//1ere methode

void deleteAtPosition(){
    temp = head;
    int i = 1, position;
    cout<<"Enter the position of the node: ";
    cin>>position;
    if(position > lengthofNode())
        cout<<"Taille maximale dépassée deletion not succeed."<<endl;
    if(position == 1)
    {
        deleteFromBeg();
    }
    else if(position == lengthofNode())
    {
        deleteAtEndBestComplexity();
    }
    else{
        cout<<"Welcome to else part"<<endl;
        cout<<"position: "<<position<<endl;
        cout<<head->data<<endl;
        while(i < position){
            temp = temp->next;
            i++;     
        }
        // supposons la position est 3 dapres mon raisonnement
        //temp stockera la valeur temp = 300 apres pour acceder au noeud
        // precedent il suffit de pointer vers le temp->prev dans le temp->prev
        //on se positionne au noeud precedent et on veut changer la valeur dans son next
        //donc on continuer la fleche de temp->prev->next = temp->next
        temp->prev->next = temp->next;
        temp->next->prev = temp->prev;
        free(temp);
        //complexity O(n) car on traverse notre LL la motie sera O(n/2)
        displayForwards();
        
    }
}

//2e  methode
void deleteAtPos(){
    int i = 1, position;
    Node *previous;
    cout<<"Enter the position of the node: ";
    cin>>position;
    if(position > lengthofNode())
        cout<<"Taille maximale dépassée deletion not succeed."<<endl;
    if(position == 1)
    {
        deleteFromBeg();
    }
    else if(position == lengthofNode())
    {
        deleteAtEndBestComplexity();
    }
    else{
        cout<<"Welcome to else part"<<endl;
        cout<<"position: "<<position<<endl;
        Node *tmp;
        temp = head;
        while(i < position){
            previous = temp;
            temp = temp->next;
            i++;
             
        }
        previous->next = temp->next;
        tmp = temp->next;
        tmp->prev = temp->prev;
        free(temp);
        displayForwards();
        
    }
}

void deleteAtEndBestComplexity(){
    Node *tmp = head;
    int nbNode;
   
    nbNode = lengthofNode();
    if(nbNode == 0)
    {
        cout<<"There's no node."<<endl;
    }
    else if(nbNode == 1)
    {
        tmp = head = NULL;
        free(tmp);
    }else{
        temp = tail;
        tail = tail->prev;
        tail->next = NULL;
        free(temp);
        displayForwards();

    }
}
void deleteAtEnd(){
    Node *tmp = head, *prevNode;
    int nbNode;
    nbNode = lengthofNode();
    if(nbNode == 0)
    {
        cout<<"There's no node."<<endl;
    }
    else if(nbNode == 1)
    {
        tmp = head = NULL;
        free(tmp);
    }else{
        while(tmp->next != NULL)
        {
            prevNode = tmp;
            tmp = tmp->next;
        }
        prevNode->next = NULL;
        free(tmp);
        displayForwards();

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
                insertAtbeginning();
                break;
            case 3:
                insertAtEndBestComplexity();
                break;
            case 4:
                insertAtPos();
                break;
            case 5:
                deleteFromBeg();
                break;
            case 6:
                deleteAtEndBestComplexity();
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
        cout<<"do u wanna continue (y/n):";
        cin>>rep;
        

    }while(rep == "y" || rep == "Y");
    
  
}

int main()
{
    menu();

    return 0;
}
