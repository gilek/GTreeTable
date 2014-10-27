/* =========================================================
 * bootstrap-gtreetable.pl.js
 * http://gtreetable.gilek.net
 * =========================================================
 * Copyright 2014 Maciej "Gilek" Kłak
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.  
 * ========================================================= */

(function( $ ) {
    $.fn.gtreetable.defaults.languages.pl = {
        save: 'Zapisz',
        cancel: 'Anuluj',
        action: 'Akcja',
        actions: {
            createBefore: 'Dodaj przed',
            createAfter: 'Dodaj po',
            createFirstChild: 'Dodaj pierwszy',
            createLastChild: 'Dodaj ostatni',
            update: 'Edytuj',
            'delete': 'Usuń'
        },
        messages: {
            onDelete: 'Czy na pewno?',
            onNewRootNotAllowed: 'Dodawania nowego węzła głównego jest zabronione.',
            onMoveInDescendant: 'Wezeł nadrzędny nie może być potomnym.',
            onMoveAsRoot: 'Przenosiny jako węzeł główny jest zabronione.'          
        }
    };
}( jQuery ));