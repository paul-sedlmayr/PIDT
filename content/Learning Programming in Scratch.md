
In their study, Topalli and Cagiltay examined the question how implementing Scratch, a graphical programming language, can improve the process of learning programming in higher education (2018). 

For one semester, an "Introduction to Programming"-course was supplemented with Scratch. As in previous semesters, students learned theoretical programming concepts and the programming language C. In this semester, students additionaly received an introduction to Scratch and created their own projects in Scratch. These students performed better in the course in comparison to other years. Even years later in their senior-project, students who attended the "enriched" introductory course with Scratch received higher grades. However, a difference in GPA at graduation could not be found.

This suggests that graphical programming languages like Scratch are valuable tools for learning programming. Especially beginners tend to be intimidated by traditional coding syntax. With Scratch, beginners can gain a broad understanding of algorithmic thinking, problem solving, and software design without having to focus on coding syntax.

### Overview

>[!Example] Topalli & Cagiltay (2018)
> ##### Goal of the Study
> Examine, how implementing Scratch in programming education can impact students' programming abilities.
> ##### Main Findings
> Enriching an introductory programming course with Scratch improves students' programming abilities. This improvement showed in the students' senior project years later.
> - Higher course grades of students in enriched course including Scratch in comparison to students in regular course
> - Higher grades in senior project by students in enriched course


### Procedure

>[!info] Comparing Students' Performance at Different Time Points
>![[Comparison_control_experimental.png]]
**Figure:** Students from the classical 'Introduction to Programming' course (Control group) are compared to students from the enriched 'Introduction to Programming' course (Experimental group). Figures for comparison are the grades in the 'Introduction to Programming' course, grades in the senior project and the cumulative GPA.
>*A more detailed comparison can be found [[Comparison_control_exerimental_detailed.png|here]].*





```C
#include <SDL2/SDL.h>

// Function prototypes
void displayMessage(SDL_Renderer *renderer, TTF_Font *font, const char *message, int duration);

int main(int argc, char *args[]) {
    SDL_Window *window = NULL;
    SDL_Renderer *renderer = NULL;
    TTF_Font *font = NULL;
    Mix_Chunk *footsteps = NULL;

    footsteps = Mix_LoadWAV("path/to/footsteps.wav");
    if (footsteps == NULL) {
        printf("Failed to load footsteps sound effect! Mix_Error: %s\n", Mix_GetError());
        return -1;
    }

    sleep(2);

    // Show sprite (In SDL, this would mean render something on the screen)
    SDL_SetRenderDrawColor(renderer, 255, 255, 255, 255);
    SDL_RenderClear(renderer);
    SDL_RenderPresent(renderer);

    Mix_PlayChannel(-1, footsteps, 0);

    // Glide to position
    sleep(5);

    displayMessage(renderer, font, "Ah! There you are!", 2);
    displayMessage(renderer, font, "Where've you been?! You need to get digging! Collect some fossils!", 6);
    displayMessage(renderer, font, "My museum will be the best in the world, or my name isn't Oliver Von Pibblesworth!", 5);

    // Broadcast fade (in SDL this might trigger some visual effect)
    sleep(1);

    // Hide sprite (In SDL, this would mean not rendering it)
    SDL_SetRenderDrawColor(renderer, 0, 0, 0, 255);
    SDL_RenderClear(renderer);
    SDL_RenderPresent(renderer);

    // Switch backdrop to "Museum" (change the background color/image)
    SDL_SetRenderDrawColor(renderer, 192, 192, 192, 255); // Example color
    SDL_RenderClear(renderer);
    SDL_RenderPresent(renderer);

    // Clean up
    Mix_FreeChunk(footsteps);
    footsteps = NULL;
    TTF_CloseFont(font);
    font = NULL;
    SDL_DestroyRenderer(renderer);
    SDL_DestroyWindow(window);
    Mix_Quit();
    TTF_Quit();
    SDL_Quit();

    return 0;
}

void displayMessage(SDL_Renderer *renderer, TTF_Font *font, const char *message, int duration) {
    SDL_Color textColor = {0, 0, 0, 255};
    SDL_Surface *textSurface = TTF_RenderText_Solid(font, message, textColor);
    SDL_Texture *textTexture = SDL_CreateTextureFromSurface(renderer, textSurface);

    SDL_Rect renderQuad = {10, 10, textSurface->w, textSurface->h};
    SDL_FreeSurface(textSurface);

    SDL_RenderCopy(renderer, textTexture, NULL, &renderQuad);
    SDL_RenderPresent(renderer);
    SDL_DestroyTexture(textTexture);

    sleep(duration);
}
```
