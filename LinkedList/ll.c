#include<stdio.h>

#include <stdlib.h>

// Function declaration
void at_beginning();
void at_end();
void at_position(int);
void display();

struct node
{
    int data;
    struct node *next;
};

struct node *head;
struct node *newnode;
struct node *temp;

// main()
int main()
{
    int choice = 1;
    head = 0;
    int count;
    int a;
    while (choice)
    {
        newnode = (struct node *)malloc(sizeof(struct node));
        newnode->next = 0;
        printf("Enter the data you want to insert : \n");
        scanf("%d", &newnode->data);

        if (head == 0)
        {
            head = temp = newnode;
        }
        else
        {
            temp->next = newnode;
            temp = newnode;
        }

        printf("Do you want to continue (1/0)? : ");
        scanf("%d", &choice);
    }
    temp = head;
    while (temp != 0)
    {
        temp = temp->next;
        count++; //-----> can be printed as length of the linked list
    }

    printf("Which operation do you want to perform ?\n press 1 ----> insert at the beginning\n press 2 ----> insert at the end\n press 3 ----> insert at specific position\n press 4 ----> To Display the Linked list\n");
    scanf("%d", &a);

    switch (a)
    {
    case 1:
        at_beginning();
        display();
        break;
    case 2:
        at_end();
        display();
        break;
    case 3:
        at_position(count);
        display();
        break;
    case 4:
        display();
        break;
    }
    return 0;
}

void at_beginning()
{
    temp = head;
    newnode = (struct node *)malloc(sizeof(struct node));
    printf("Enter the data for insert at the beginning : \n");
    scanf("%d", &newnode->data);
    newnode->next = 0;

    newnode->next = head;
    head = newnode;
}

void at_end()
{
    temp = head;
    newnode = (struct node *)malloc(sizeof(struct node));
    printf("Enter the data for insert at the end :\n");
    scanf("%d", &newnode->data);
    newnode->next = 0;
    while (temp->next != 0)
    {
        temp = temp->next;
    }
    temp->next = newnode;
}

void at_position(int count)
{
    int pos, i = 1;
    temp = head;
    newnode = (struct node *)malloc(sizeof(struct node));
    printf("Enter the data for insert at a position : \n");
    scanf("%d", &newnode->data);
    newnode->next = 0;

    printf("Enter the position where you want to insert : \n");
    scanf("%d", &pos);
    if (pos <=0 || pos > count)
    {
        printf("Can't be modified \n");
    }
    else
    {
        while (i < pos-1)
        {
            temp = temp->next;
            i++;
        }
        newnode->next = temp->next;
        temp->next = newnode;
    }
}

// Printing the Linked list
void display()
{
    temp = head;
    printf("Your Linked list is : \n");
    while (temp != 0)
    {
        printf("%d\t", temp->data);
        temp = temp->next;
    }
}