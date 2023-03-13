#include <iostream>

using namespace std;

int countFunc(int arr[], int elt)
{
    int cpt = 0;
	for(int i = 0; i < sizeof(arr); ++i)
	{
	    if(arr[i] == elt)
	        cpt++;
	}
	return cpt;
}

int main()
{
    int arr[10]; int size,data;
    cout<<"Enter the size of the array: ";
    cin>>size;
    if(size> sizeof(arr))
    {
        cout<<"La taille est trop grande limite de 1 to 9";
    }
    else{
        cout<<"Enter the element of the array: ";
        for(int i = 0; i < size; i++)
        {
            cin>>arr[i];
        }
        for(int i = 0; i < size; i++)
        {
            cout<<arr[i]<<" ";
        }
    }
    cout<<"Enter the element you wanna count: ";
    cin>>data;
    cout<<"the number of "<<data<<" is "<<countFunc(arr, data);
        

    return 0;
}
