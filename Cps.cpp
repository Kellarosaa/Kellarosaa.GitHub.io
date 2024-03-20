#include <iostream>
#include <chrono>
#include <thread>

int main() {
    std::string input;
    std::cout << "Press enter to start the timer: ";
    std::getline(std::cin, input);

    auto start = std::chrono::steady_clock::now();

    std::cout << "Type in the text box: ";
    std::getline(std::cin, input);

    auto end = std::chrono::steady_clock::now();
    auto duration = std::chrono::duration_cast<std::chrono::seconds>(end - start).count();

    int wordsPerSecond = input.length() / duration;

    std::cout << "Words per second: " << wordsPerSecond << std::endl;

    return 0;
}
